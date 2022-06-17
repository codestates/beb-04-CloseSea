import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import { useState } from "react";

function Movie({ coverImg, title, description, price }) {
  const [like, setLike] = useState(false);

  return (
    <div className={styles.movie}>
      <img src={coverImg} className={styles.movie__img} />
      <div>
        <h1 className={styles.movie__title}>{title}</h1>
        {description === "null" ? null : <p>{description}</p>}
      </div>
      <span className={styles.movie__price}>
        Price: {price}
        <img
          className="ethImg"
          src="https://gateway.pinata.cloud/ipfs/QmSiscDA3ybp8jbHYT5qiDoRM17tRqLf7dTuCG7oJ44ayr"
          width="30"
          height="30"
          alt=""
          // 👆 누가 판매중인지 프로필 이미지 띄우기
        />
      </span>

      <div className={styles.down}>
        <span
          className={styles.movie__likeButton}
          onClick={() => {
            console.log("click");
            setLike(!like);
          }}
        >
          {like ? "💖" : "🖤"}
        </span>
      </div>
    </div>
  );
}
export default Movie;
