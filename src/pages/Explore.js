import { useEffect, useState } from 'react';
import Movie from '../components/Movie.js';
import styles from './Explore.module.css';

function Explore() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    // 처음 렌더될 때 한 번만!
    const dataLoad = async () => {
      const dataList = await fetch(
        `https://testnets-api.opensea.io/api/v1/assets?order_by=sale_date&order_direction=desc&offset=${
          (2 - 1) * 20
        }&limit=20&include_orders=true`,
        options
      )
        .then((response) => response.json()) //받아온 결과를 제이슨화!
        .then((json) => {
          console.log(json.assets);
          setMovies(json.assets); // 제이슨화 된것.data.movies == movies로 정의
          setLoading(false);
        }) // 로딩 없애기)
        .catch((err) => console.error(err));
      // setMovies(json.data.movies); // 제이슨화 된것.data.movies == movies로 정의
      // setLoading(false); // 로딩 없애기
    };
    dataLoad();
  }, []);
  console.log(movies);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading NFT</span>
          {/* // 로딩중이면 */}
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie // props로 다 Movie 컴포넌트에 넘겨주는 곳
              key={movie.id} // 컴포넌트를 map할 때도 key필요!
              id={movie.id}
              coverImg={movie.image_preview_url}
              title={movie.asset_contract.name}
              description={movie.asset_contract.description}
              price={movie.last_sale.total_price / 10000000000000000000}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;
