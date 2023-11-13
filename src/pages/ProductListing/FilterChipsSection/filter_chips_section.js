import React from "react";
import FilterChip from "components/FilterChip/filter_chip";
import styles from "./filter_chips_section.module.css";
import filtersIcon from "assets/icons/filters-icon.svg";
import filtersSelectedIcon from "assets/icons/filters-selected-icon.svg";
import PropTypes from "prop-types";
import Typography from "uiKit/Typography/typography";

const FilterChipsSection = ({ facets }) => {
  console.log({ facets });

  const SelectedFilterIcon = (count) => {
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
                color="#191919"
                text={count}
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

  let filtersSelectedCount = 0;

  // Compute this value after the api response is received
  facets.forEach((facet) => {
    if (facet.values.some((value) => value.selected)) {
      filtersSelectedCount++;
    }
  });

  return (
    <div className={styles.filter_chips_wrapper}>
      {SelectedFilterIcon(filtersSelectedCount)}
      <div className={styles.filter_chips_section}>
        {facets.map((facet, index) => (
          <FilterChip key={index} facet={facet} />
        ))}
      </div>
    </div>
  );
};

FilterChipsSection.propTypes = {
  facets: PropTypes.array.isRequired,
};

export default FilterChipsSection;
