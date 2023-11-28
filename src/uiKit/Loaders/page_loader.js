import React from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import lottieJson from "./lottie.json";
import styles from "./page_loader.module.css";

const PageLoader = ({ variant }) => {
  if (variant === "transparent") {
    return (
      <div id="page-loader" className={styles.transparent_loader}>
        <Lottie loop animationData={lottieJson} play />
      </div>
    );
  } else {
    return (
      <div id="page-loader" className={styles.page_loader}>
        <Lottie loop animationData={lottieJson} play />
      </div>
    );
  }
};

PageLoader.propTypes = {};

export default PageLoader;
