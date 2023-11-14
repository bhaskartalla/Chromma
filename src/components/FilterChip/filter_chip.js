import React from "react";
import downChevron from "assets/icons/down-chevron-icon.svg";
import downChevronGreenIcon from "assets/icons/down-chevron-green-icon.svg";
import Typography from "uiKit/Typography/typography";
import styles from "./filter_chip.module.css";
import PropTypes from "prop-types";

const FilterChip = ({ facet, filterChipClick }) => {
  // change this calculation to 'facetSelectedCount' after api integration
  const isSelected = facet.values.some((value) => value.selected);

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
          style={{ color: `${isSelected ? "#12DAA8" : "#ABABAB"}` }}
          text={facet.name}
        />
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

FilterChip.propTypes = {
  facet: PropTypes.object.isRequired,
  filterChipClick: PropTypes.func,
};

export default FilterChip;
