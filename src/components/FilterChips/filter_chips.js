import React from "react";
import downChevron from "assets/icons/down-chevron-icon.svg";
import downChevronGreenIcon from "assets/icons/down-chevron-green-icon.svg";
import Typography from "uiKit/Typography/typography";
import styles from "./filter_chips.module.css";
import PropTypes from "prop-types";

const index = ({ text, children, isSelected, filterChipClick }) => {
  return (
    <div
      className={`${styles.filter_chips_wrapper} ${
        isSelected && styles.filter_chips_wrapper_selected
      }`}
      onClick={filterChipClick}
    >
      <div className={styles.filter_chips_text}>
        <Typography
          variant="caption-xx-small-semibold"
          color={`${isSelected ? "#12DAA8" : "#ABABAB"}`}
        >
          {text || children}
        </Typography>
      </div>
      {isSelected ? (
        <img
          width={16}
          height={16}
          src={downChevronGreenIcon}
          alt="downChevronGreenIcon"
          style={{ marginLeft: "8px" }}
        />
      ) : (
        <img
          width={16}
          height={16}
          src={downChevron}
          alt="downChevron"
          style={{ marginLeft: "8px" }}
        />
      )}
    </div>
  );
};

index.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  isSelected: PropTypes.bool,
  filterChipClick: PropTypes.func,
};

export default index;
