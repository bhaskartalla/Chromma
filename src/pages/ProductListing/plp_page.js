import React, { useRef, useState, useEffect } from "react";
import PlpAppbar from "components/Appbar/plp_appbar";
import Searchbar from "components/Searchbar/searchbar";
import FilterChipsSection from "./FilterChipsSection/filter_chips_section";
import PlpCard from "./PlpCard/plp_card";
import styles from "./plp_page.module.css";
import Typography from "uiKit/Typography/typography";
import Dropdown from "components/Dropdown/dropdown";
import EndOfScroll from "./EndOfScroll/end_of_scroll";
import NoResultsFound from "components/NoResultsFound/no_results_found";
import InlineFilters from "./InlineFilterCard/inline_filters";
import Filters from "pages/ProductListing/Filters/filters";
import circleCloseIcon from "assets/icons/circle-close-icon.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlpApiResponse } from "./state/action_creators";

const PlpPage = () => {
  const plpResponse = useSelector((state) => state.plpReducer?.response);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlpApiResponse());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const products = plpResponse?.products;
  const facets = plpResponse?.facets;
  const filterItemCount = plpResponse?.filterItemCount;
  const showNoResultsCard = !products?.length;

  const navigate = useNavigate();
  const [filterModal, setFilterModal] = useState({
    state: false,
    facetCode: "",
  });
  const scrollToTop = useRef(null);

  const handleScrollToTop = () =>
    scrollToTop.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const renderHeaderBlock = () => (
    <div className={styles.header_section}>
      <PlpAppbar pincode={400013} />
      <Searchbar
        searchedText="trimmer"
        circleCloseIcon={circleCloseIcon}
        handleSearchBarClick={() => navigate("/global-search")}
      />
      <div
        className={`${styles.filter_chips_section} ${
          showNoResultsCard && styles.filter_chips_section_remove_margin
        }`}
      >
        {!showNoResultsCard && (
          <FilterChipsSection
            facets={facets}
            handleFilterModal={(facetCode) => {
              setFilterModal({ state: true, facetCode });
            }}
          />
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
        facets.filter((facet) => facet.code === "category")[0],
        filterItemCount
      )}
      {products.map((product, index) => {
        return (
          <div key={product.skuId}>
            <PlpCard productDetails={product} />
            <div className={styles.divider} />
            {!((index + 1) % 2) && (
              <InlineFilters
                facets={facets.filter((facet) => facet.popular).slice(0, 2)}
                handleSeeAllFilters={() =>
                  setFilterModal({ state: true, facetCode: "" })
                }
              />
            )}
          </div>
        );
      })}
      <EndOfScroll handleScrollToTop={handleScrollToTop} />
    </div>
  );

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.page_wrapper}>
        {renderHeaderBlock()}
        {showNoResultsCard ? (
          <NoResultsFound />
        ) : (
          <>{renderPlpScrollCardsBlock()}</>
        )}
      </div>
      {filterModal.state && (
        <Filters
          defaultSelectedFacet={filterModal.facetCode}
          facets={facets}
          handleCloseFilterModal={() =>
            setFilterModal({ state: false, facetCode: "" })
          }
        />
      )}
    </div>
  );
};

export default PlpPage;
