import React, { useRef } from "react";
import PlpAppbar from "components/Appbar/plp_appbar";
import Searchbar from "components/Searchbar/searchbar";
import FilterChipsSection from "./FilterChipsSection/filter_chips_section";
import PlpCard from "./PlpCard/plp_card";
import styles from "./plp_page.module.css";
import Typography from "uiKit/Typography/typography";
import Dropdown from "components/Dropdown/dropdown";
import plpResponse from "apiData/plp_response.json";
import EndOfScroll from "./EndOfScroll/end_of_scroll";
import NoResultsFound from "components/NoResultsFound/no_results_found";

const PlpPage = () => {
  const products = plpResponse?.data?.products;
  const showNoResultsCard = !products.length;

  const scrollToTop = useRef(null);

  console.log({ plpResponse });

  const handleScrollToTop = () =>
    scrollToTop.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const renderHeaderBlock = () => (
    <div className={styles.header_section}>
      <PlpAppbar pincode={400013} />
      <Searchbar />
      <div
        className={`${styles.filter_chips_section} ${
          showNoResultsCard && styles.filter_chips_section_remove_margin
        }`}
      >
        {!showNoResultsCard && (
          <FilterChipsSection facets={plpResponse.data.facets} />
        )}
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

  const renderPlpScrollCardsBlock = () => (
    <div ref={scrollToTop} className={styles.cards_section}>
      {noOfProducts(
        plpResponse.data.facets.filter((facet) => facet.code === "category")[0],
        plpResponse.data.filterItemCount
      )}
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
      <EndOfScroll handleScrollToTop={handleScrollToTop} />
    </div>
  );

  return (
    <div className={styles.page_wrapper}>
      {renderHeaderBlock()}
      {showNoResultsCard ? (
        <NoResultsFound />
      ) : (
        <>{renderPlpScrollCardsBlock()}</>
      )}
    </div>
  );
};

export default PlpPage;
