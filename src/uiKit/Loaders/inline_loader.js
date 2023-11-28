import React from "react";
import styles from "./inline_loader.module.css";

const InlineLoader = (props) => {
  return (
    <div className={styles.page_loader_wrapper}>
      <div className={styles.page_loader}></div>
    </div>
  );
};

InlineLoader.propTypes = {};

export default InlineLoader;
