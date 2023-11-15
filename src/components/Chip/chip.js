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
      id="lallan"
      className={`${styles.chip_wrapper} ${
        isSelected && styles.chip_wrapper_selected
      }`}
      onClick={handleChipClick}
    >
      <div className={styles.chip_text}>
        <Typography
          variant={textVariant}
          style={{ color: `${isSelected ? "#12DAA8" : "#ABABAB"}` }}
          text={text || children}
        />
      </div>
      {withIcon && (
        <>
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
        </>
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
