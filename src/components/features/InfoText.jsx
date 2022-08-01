import React from "react";
import styles from "./InfoText.module.css";

const InfoText = () => {
  return (
    <main className={styles["info-text"]}>
      <h1 className={styles.heading}>
        Everyday items, we have something to suit every occasion.
      </h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        magni eligendi reprehenderit similique quia libero ad voluptate quis
        itaque porro.
      </p>
      <button className={styles.button}>Shop All Everyday Items</button>
    </main>
  );
};

export default InfoText;
