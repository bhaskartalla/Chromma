import React from "react";
import styles from "./searchbar.module.css";
import searchIcon from "assets/icons/search-icon.svg";
import circleCloseIcon from "assets/icons/circle-close-icon.svg";
import Typography from "uiKit/Typography/typography";

const Searchbar = () => {
  return (
    <div className={styles.searchbar_wrapper}>
      <div className={styles.search_text}>
        <img width={16} height={16} src={searchIcon} alt="searchIcon" />
        <Typography
          variant="body-x-small-regular"
          text="air conditioner"
          marginLeft="8px"
        />
      </div>
      <img width={24} height={24} src={circleCloseIcon} alt="circleCloseIcon" />
    </div>
  );
};

export default Searchbar;
