import React from "react";
import Chip from "components/Chip/chip";
import styles from "./filter_chips_section.module.css";
import filtersIcon from "assets/icons/filters-icon.svg";
import filtersSelectedIcon from "assets/icons/filters-selected-icon.svg";
import PropTypes from "prop-types";
import Typography from "uiKit/Typography/typography";

const selectedFilterIcon = (count) => {
  const selected = count > 0;
  return (
    <div
      className={`${styles.filter_icon_wrapper} ${
        selected && styles.filter_icon_wrapper_selected
      }`}
    >
      {selected ? (
        <>
          <div className={styles.filter_selected_count}>
            <Typography
              variant="caption-xx-small-semibold"
              text={count}
              style={{
                color: "#191919",
              }}
            />
          </div>
          <img
            width={16}
            height={16}
            src={filtersSelectedIcon}
            alt="filtersSelectedIcon"
          />
        </>
      ) : (
        <img width={16} height={16} src={filtersIcon} alt="filtersIcon" />
      )}
    </div>
  );
};

const FilterChipsSection = ({ facets }) => {
  let filtersSelectedCount = 0;

  const handleChipClick = (facetCode) =>
    console.log("handleChipClick", { facetCode });

  // Compute this value after the api response is received
  facets.forEach((facet) => {
    if (facet.values.some((value) => value.selected)) {
      filtersSelectedCount++;
    }
  });

  return (
    <div className={styles.filter_chips_wrapper}>
      {selectedFilterIcon(filtersSelectedCount)}
      <div className={styles.filter_chips_section}>
        {facets.map((facet, index) => {
          const isSelected = facet.values.some((value) => value.selected);
          return (
            <Chip
              textVariant="caption-xx-small-semibold"
              key={index}
              text={facet.name}
              withIcon={true}
              isSelected={isSelected}
              handleChipClick={() => handleChipClick(facet.code)}
            />
          );
        })}
      </div>
    </div>
  );
};

FilterChipsSection.propTypes = {
  facets: PropTypes.array.isRequired,
};

export default FilterChipsSection;
