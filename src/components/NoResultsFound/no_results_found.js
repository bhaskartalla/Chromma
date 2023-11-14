import React from "react";
import styles from "./no_results_found.module.css";
import connectionImage from "assets/images/connection-image.png";
import Typography from "uiKit/Typography/typography";

const NoResultsFound = () => {
  return (
    <div className={styles.no_results_found_wrapper}>
      <img
        src={connectionImage}
        width={142}
        height={125}
        alt="End of scroll card"
      />
      <Typography
        variant="title-medium-bold"
        style={{ color: "#efefef", marginTop: "16px" }}
        text="Sorry! No result found"
      />
      <Typography
        variant="body-x-small-regular "
        style={{
          color: "#8B8B8B",
          marginTop: "8px",
          textAlign: "center",
          width: "218px",
        }}
        text="We’re sorry you were looking for. Please try another way"
      />
    </div>
  );
};

export default NoResultsFound;
