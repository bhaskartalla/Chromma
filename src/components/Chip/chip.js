import React from "react";
import downChevron from "assets/icons/down-chevron-icon.svg";
import downChevronGreenIcon from "assets/icons/down-chevron-green-icon.svg";
import Typography from "uiKit/Typography/typography";
import styles from "./chip.module.css";
import PropTypes from "prop-types";

const Chip = ({
  text,
  children,
  textVariant,
  isSelected,
  withIcon,
  handleChipClick,
}) => {
  return (
    <div
      className={`${styles.chip_wrapper} ${
        isSelected && styles.chip_wrapper_selected
      }`}
      onClick={handleChipClick}
    >
      <Typography
        variant={textVariant}
        style={{ color: `${isSelected ? "#12DAA8" : "#ABABAB"}` }}
        text={text || children}
      />
      {withIcon && (
        <img
          width={16}
          height={16}
          src={isSelected ? downChevronGreenIcon : downChevron}
          alt="Chevron icon"
          style={{ marginLeft: "8px" }}
        />
      )}
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  textVariant: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  withIcon: PropTypes.bool,
  handleChipClick: PropTypes.func,
};

export default Chip;
