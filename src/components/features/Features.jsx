import React from "react";
import InfoText from "./InfoText";
import ProductList from "./ProductList";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <InfoText />
      <ProductList />
    </section>
  );
};

export default Features;
