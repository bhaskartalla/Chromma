import React from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import lottieJson from "./lottie.json";
import styles from "./loader.module.css";

const PageLoader = (props) => {
  return (
    <div id="page-loader" className={styles.page_loader}>
      <Lottie loop animationData={lottieJson} play />
    </div>
  );
};

PageLoader.propTypes = {};

export default PageLoader;
