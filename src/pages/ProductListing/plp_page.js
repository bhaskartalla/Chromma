import React from "react";
import PlpAppbar from "components/Appbar/plp_appbar";
import Searchbar from "components/Searchbar/searchbar";
import FilterChipsSection from "./FilterChipsSection/filter_chips_section";
import PlpCard from "./PlpCard/plp_card";
import styles from "./plp_page.module.css";
import Typography from "uiKit/Typography/typography";
import Dropdown from "components/Dropdown/dropdown";
import plpResponse from "apiData/plp_response.json";

const plpPage = () => {
  console.log({ plpResponse });

  const headerSection = () => (
    <div className={styles.header_section}>
      <PlpAppbar pincode={400013} />
      <Searchbar />
      <div className={styles.filter_chips_section}>
        <FilterChipsSection facets={plpResponse.data.facets} />
      </div>
    </div>
  );

  const noOfProducts = (facet, filterItemCount) => {
    return (
      <div className={styles.no_of_products}>
        <Typography
          variant="body-x-small-regular"
          text={`${filterItemCount} ${
            filterItemCount > 0 ? "Products" : "Product"
          } found`}
          style={{
            marginRight: "4px",
            color: "#A6A6A6",
          }}
        />
        <Dropdown brandList={facet.values} />
      </div>
    );
  };

  const renderPlpCards = (products) => {
    return (
      <>
        {products.map((product, index) => {
          return (
            <div key={product.skuId}>
              <PlpCard productDetails={product} />
              {index !== products.length - 1 && (
                <div id={index} className={styles.divider} />
              )}
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className={styles.page_wrapper}>
      {headerSection()}
      <div className={styles.cards_section}>
        {noOfProducts(
          plpResponse.data.facets.filter(
            (facet) => facet.code === "category"
          )[0],
          plpResponse.data.filterItemCount
        )}
        {renderPlpCards(plpResponse.data.products)}
      </div>
    </div>
  );
};

export default plpPage;
