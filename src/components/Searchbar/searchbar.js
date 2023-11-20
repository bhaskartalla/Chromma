import React from "react";
import styles from "./searchbar.module.css";
import searchWhiteIcon from "assets/icons/search-white-icon.svg";
import searchBlackIcon from "assets/icons/search-black-icon.svg";
import Typography from "uiKit/Typography/typography";
import PropTypes from "prop-types";

const Searchbar = ({
  searchedText,
  isDarkThemed = true,
  circleCloseIcon,
  handleSearchBarClick,
}) => {
  return (
    <div
      id="searchbar_wrapper"
      className={`${styles.searchbar_wrapper} ${
        !isDarkThemed && styles.searchbar_wrapper_white
      }`}
      onClick={handleSearchBarClick}
    >
      <div className={styles.search_text}>
        <img
          width={16}
          height={16}
          src={isDarkThemed ? searchWhiteIcon : searchBlackIcon}
          alt="Search icon"
        />
        <Typography
          variant="body-x-small-regular"
          text={searchedText}
          style={{
            marginLeft: "8px",
            color: isDarkThemed ? "#EFEFEF" : "#616161",
          }}
        />
      </div>

      {circleCloseIcon && (
        <img
          width={24}
          height={24}
          src={circleCloseIcon}
          alt="circleCloseIcon"
        />
      )}
    </div>
  );
};

Searchbar.propTypes = {
  searchedText: PropTypes.string,
  isDarkThemed: PropTypes.bool,
  handleSearchBarClick: PropTypes.func,
};

export default Searchbar;
