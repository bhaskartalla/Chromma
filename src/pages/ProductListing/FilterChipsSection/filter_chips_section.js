import React from "react";
import FilterChips from "../../../components/FilterChips/filter_chips";
import styles from "./filter_chips_section.module.css";
import filtersIcon from "../../../assets/icons/filters-icon.svg";

const FilterChipsSection = () => {
  return (
    <div className={styles.filter_chips_wrapper}>
      <img
        width={32}
        height={32}
        src={filtersIcon}
        alt="filtersIcon"
        style={{ marginRight: "12px", marginLeft: "16px" }}
      />
      <div className={styles.filter_chips_section}>
        <FilterChips text="Sort" />
        <FilterChips text="Brand" />
        <FilterChips text="Delivery Mode" />
        <FilterChips text="Sort" />
        <FilterChips text="Brand" />
        <FilterChips text="Delivery Mode" />
        <FilterChips text="Sort" />
        <FilterChips text="Brand" />
        <FilterChips text="Delivery Mode" />
        <FilterChips text="Sort" />
        <FilterChips text="Brand" />
        <FilterChips text="Delivery Mode" />
      </div>
    </div>
  );
};

export default FilterChipsSection;
