import React from "react";
import styles from "./inline_filters.module.css";
import Typography from "uiKit/Typography/typography";
import Button from "uiKit/Button/button";

import Chip from "components/Chip/chip";

const InlineFilters = ({ facets }) => {
  const handleChipClick = (valueCode) =>
    console.log("handleChipClick", { valueCode });

  const handleSeeAllFilters = () => console.log("handleSeeAllFilters");

  const handleShowItems = () => console.log("handleShowItems");

  return (
    <div className={styles.inline_filter_wrapper}>
      {facets.map((facet) => (
        <div key={facet.code} style={{ marginTop: "16px" }}>
          <Typography
            variant="body-small-bold"
            text={`Filter by ${facet.name}`}
            style={{ color: "#C6C6C6", margin: "0 16px" }}
          />
          <div className={styles.filter_chips}>
            {facets[1].values.map((value, index) => (
              <div
                key={value.code}
                style={{
                  marginLeft: `${index === 0 ? "16px" : "unset"}`,
                  marginRight: `${
                    index === facets[1].values.length - 1 ? "16px" : "unset"
                  }`,
                }}
              >
                <Chip
                  text={value.name}
                  isSelected={value.selected}
                  textVariant="body-x-small-regular"
                  handleChipClick={() => handleChipClick(value.code)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className={styles.see_all_filter}>
        <Typography
          variant="label-button-x-small"
          text={"See all filters".toUpperCase()}
          style={{ color: "#12DAA8" }}
          onClick={handleSeeAllFilters}
        />
        <Button
          textVariant="label-button-x-small"
          textColor="#191919"
          text={"Show items".toUpperCase()}
          handleOnClick={handleShowItems}
        />
      </div>
    </div>
  );
};

export default InlineFilters;
