import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
import { useState } from 'react';

function Movie({ coverImg, title, description, price }) {
  const [like, setLike] = useState(false);

  return (
    <div className={styles.movie}>
      <img src={coverImg} className={styles.movie__img} />
      {/* 모든 이미지 element들은 alt 속성을 가진다! */}
      <div>
        <h1 className={styles.movie__title}>{title}</h1>
        {description === 'null' ? null : <p>{description}</p>}
      </div>
      <span className={styles.movie__price}>{price} eth</span>

      <div className={styles.down}>
        <span
          className={styles.movie__likeButton}
          onClick={() => {
            console.log('click');
            setLike(!like);
          }}
        >
          {like ? '💖' : '🖤'}
        </span>
      </div>
    </div>
  );
}
export default Movie;
