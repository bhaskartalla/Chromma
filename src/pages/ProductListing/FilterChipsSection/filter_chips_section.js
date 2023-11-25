import React from "react";
import Chip from "components/Chip/chip";
import styles from "./filter_chips_section.module.css";
import filtersIcon from "assets/icons/filters-icon.svg";
import filtersSelectedIcon from "assets/icons/filters-selected-icon.svg";
import PropTypes from "prop-types";
import Typography from "uiKit/Typography/typography";

const FilterChipsSection = ({ facets, handleFilterModal }) => {
  let filtersSelectedCount = facets.filter(
    (facet) => facet.selectedValueCount > 0
  ).length;

  const selectedFilterIcon = (count) => {
    const selected = count > 0;
    return (
      <div
        className={`${styles.filter_icon_wrapper} ${
          selected && styles.filter_icon_wrapper_selected
        }`}
        onClick={() => handleFilterModal("")}
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

  return (
    <div className={styles.filter_chips_wrapper}>
      {selectedFilterIcon(filtersSelectedCount)}
      <div className={styles.filter_chips_section}>
        {facets.map((facet, index) => {
          const isSelected = facet.values.some((value) => value.selected);
          return (
            <Chip
              textVariant="caption-xx-small-semibold"
              key={facet.code}
              text={facet.name}
              withIcon={true}
              isSelected={isSelected}
              handleChipClick={() => handleFilterModal(facet.code)}
              style={{
                marginRight: `${
                  index === facets.length - 1 ? "12px" : "unset"
                }`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

FilterChipsSection.propTypes = {
  facets: PropTypes.array.isRequired,
  handleFilterModal: PropTypes.func.isRequired,
};

export default React.memo(FilterChipsSection);
