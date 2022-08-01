import React from "react";
import coverImage from "../../assets/cover-image.png";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <section>
      <img
        className={styles.image}
        src={coverImage}
        alt="a woman with yellow sport outfit"
      />
    </section>
  );
};

export default Banner;
