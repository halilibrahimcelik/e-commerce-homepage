import React from "react";
import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <div className={`container ${styles["main-container"]}`}>
      {props.children}
    </div>
  );
};

export default Container;
