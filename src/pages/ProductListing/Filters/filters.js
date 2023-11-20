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
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Searchbar from "components/Searchbar/searchbar";

const Filters = ({ defaultSelectedFacet, facets, handleCloseFilterModal }) => {
  const [expanded, setExpanded] = useState(defaultSelectedFacet);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleFilterSearchModal = () => {
    console.log("handleFilterSearchModal");
  };

  const headerBlock = (
    <div className={styles.header_bar}>
      <Typography
        variant="body-medium-regular"
        style={{ color: "#212121", left: "50%", position: "absolute" }}
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
          style={{ color: "#088466" }}
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

  const accordionRadio = (
    <div id="accordion-wrapper" className={styles.accordion_wrapper}>
      {facets.map((facet) => (
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
                <div style={{ marginBottom: "8px" }}>
                  <Searchbar
                    searchedText="Search Brand"
                    isDarkThemed={false}
                    handleSearchBarClick={handleFilterSearchModal}
                  />
                </div>
              )}
              <div className={styles.accordion_details}>
                {facet.values.slice(0, 3).map((value) => (
                  <div key={value.code} className={styles.checkbox_wrapper}>
                    <FormControlLabel
                      control={<Checkbox checked={value.selected} />}
                      label={value.name}
                      onChange={() => {
                        // call filter change function
                        console.log({
                          facetCode: facet.code,
                          valueCode: value.code,
                          state: value.selected,
                        });
                      }}
                    />
                  </div>
                ))}
                {facet.values.length > 3 && (
                  <div className={styles.view_more}>
                    <Typography
                      variant="label-button-x-small"
                      text={`${facet.values.length - 3} more`.toUpperCase()}
                      style={{ color: "#088466" }}
                      onClick={handleFilterSearchModal}
                    />
                  </div>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
          <div className={styles.accordion_divider} />
        </div>
      ))}
    </div>
  );

  return (
    <div id="filter_wrapper" className={styles.filter_wrapper}>
      {headerBlock}
      {accordionRadio}
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
