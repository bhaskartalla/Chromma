import React, { useState } from "react";
import styles from "./filters.module.css";
import Typography from "uiKit/Typography/typography";
import plpResponse from "apiData/plp_response.json";
import Button from "uiKit/Button/button";
import crossCloseIcon from "assets/icons/cross-close-icon.svg";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import accordionIcon from "assets/icons/accordion-icon.svg";
import Searchbar from "components/Searchbar/searchbar";
import Checkbox from "uiKit/Checkbox/checkbox";
import Inputbox from "uiKit/Inputbox/inputbox";
import leftBlackChevronIcon from "assets/icons/left-black-chevron-icon.svg";

const Filters = ({ defaultSelectedFacet, facets, handleCloseFilterModal }) => {
  const [expanded, setExpanded] = useState(defaultSelectedFacet);
  const [filterSearch, setFilterSearch] = useState({
    state: false,
    facet: {},
    setFocus: false,
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTextChange = (text) => {
    const filteredValues = facets
      .filter((facet) => facet.code === filterSearch.facet.code)[0]
      .values.filter((value) => {
        return value.name.toLowerCase().includes(text.toLowerCase());
      });

    setFilterSearch((prev) => ({
      state: true,
      facet: {
        ...prev.facet,
        values: filteredValues,
      },
    }));
  };

  const handleFilterSearchModal = (facet, setFocus) => {
    setFilterSearch({ state: true, facet, setFocus });
  };

  const filterHeader = (
    <div className={styles.filter_header_bar}>
      <Typography
        variant="body-medium-regular"
        style={{ color: "#212121", left: "45%", position: "absolute" }}
        text="Filters"
      />
      <img
        width={16}
        height={16}
        src={crossCloseIcon}
        alt="Close icon"
        style={{ marginLeft: "auto" }}
        onClick={handleCloseFilterModal}
      />
    </div>
  );

  const filterSearchHeader = (
    <div className={styles.filter_search_header_bar}>
      <img
        width={20}
        height={20}
        src={leftBlackChevronIcon}
        alt="left black Chevron"
        style={{ marginRight: "16px" }}
        onClick={() => setFilterSearch({ state: false, facetName: {} })}
      />
      <Typography
        variant="body-medium-regular"
        style={{ color: "#212121" }}
        text={filterSearch?.facet?.name}
      />
      <img
        width={16}
        height={16}
        src={crossCloseIcon}
        alt="Close icon"
        style={{ marginLeft: "auto" }}
        onClick={handleCloseFilterModal}
      />
    </div>
  );

  const bottomBlock = (
    <div className={styles.bottom_bar}>
      <Typography
        variant="body-x-small-regular"
        style={{ color: "#777" }}
        text={`${plpResponse?.data?.filterItemCount} ${
          plpResponse?.data?.filterItemCount > 1 ? "items" : "item"
        }`}
      />
      <div className={styles.rest_apply_wrapper}>
        <Typography
          variant="label-button-x-small"
          style={{ color: "#088466", cursor: "pointer" }}
          text={"RESET"}
          onClick={() => console.log("Reset")}
        />
        <Button
          text="Apply"
          textVariant="label-button-x-small"
          textColor="#FFFFFF"
          style={{
            backgroundColor: "#088466",
            width: "128px",
            height: "40px",
          }}
          handleOnClick={() => console.log("Apply")}
        />
      </div>
    </div>
  );

  const renderFacetValues = (facet, count) => (
    <div className={styles.accordion_details}>
      {facet?.values?.slice(0, count).map((value, index) => (
        <div
          key={value.code}
          style={{ marginTop: index === 0 ? "8px" : "24px" }}
          className={styles.checkbox_wrapper}
        >
          {facet.multiSelect ? (
            <Checkbox
              textVariant="label-x-small-regular"
              textColor="#212121"
              text={value.name}
              checked={value.selected}
            />
          ) : (
            <div id="lallan" />
          )}
        </div>
      ))}
    </div>
  );

  const accordionCheckboxRadio = facets.map((facet) => (
    <div key={facet.code}>
      <Accordion
        id="Accordion"
        expanded={expanded === facet.code}
        onChange={handleChange(facet.code)}
      >
        <AccordionSummary
          id={`${facet.code}-header`}
          expandIcon={
            <img width={16} height={16} src={accordionIcon} alt="expand" />
          }
        >
          <Typography
            variant="body-small-regular"
            text={facet.name}
            style={{ color: "#212121" }}
          />
        </AccordionSummary>
        <AccordionDetails id={`${facet.code}-details`}>
          {facet.isSearchEnabled && (
            <div style={{ marginBottom: "24px" }}>
              <Searchbar
                searchedText="Search Brand"
                isDarkThemed={false}
                handleSearchBarClick={() =>
                  handleFilterSearchModal(facet, true)
                }
              />
            </div>
          )}
          {renderFacetValues(facet, 3)}
          {facet.values.length > 3 && (
            <div className={styles.view_more}>
              <Typography
                variant="label-button-x-small"
                text={`${facet.values.length - 3} more`.toUpperCase()}
                style={{ color: "#088466", cursor: "pointer" }}
                onClick={() => handleFilterSearchModal(facet, false)}
              />
            </div>
          )}
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          margin: "0 16px",
        }}
        className={styles.accordion_divider}
      />
    </div>
  ));

  const filterSearchSection = (
    <div id="filter-search" className={styles.filter_search}>
      <Inputbox
        isDarkThemed={false}
        placeholder={`Search ${filterSearch?.facet?.name}`}
        onChange={handleTextChange}
        setFocus={filterSearch.setFocus}
      />
      <div
        style={{
          margin: "16px 0 20px",
        }}
        className={styles.accordion_divider}
      />
      {renderFacetValues(filterSearch.facet)}
    </div>
  );

  return (
    <div id="filter_wrapper" className={styles.filter_wrapper}>
      {filterSearch.state ? filterSearchHeader : filterHeader}
      <div id="accordion-wrapper" className={styles.accordion_wrapper}>
        {filterSearch.state ? filterSearchSection : accordionCheckboxRadio}
      </div>
      {bottomBlock}
    </div>
  );
};

Filters.propTypes = {
  defaultSelectedFacet: PropTypes.string,
  facets: PropTypes.array,
  handleCloseFilterModal: PropTypes.func,
};

export default Filters;
