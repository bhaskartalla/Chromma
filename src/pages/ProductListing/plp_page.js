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
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.header_section}>
        <PlpAppbar pincode={400013} />
        <Searchbar />
        <div className={styles.filter_chips_section}>
          <FilterChipsSection />
        </div>
      </div>
      <div className={styles.cards_section}>
        <div className={styles.no_of_products}>
          <Typography
            variant="body-x-small-regular"
            color="#A6A6A6"
            text="127 Products found"
            marginRight="4px"
          />
          <Dropdown />
        </div>
        <PlpCard />
        <div className={styles.divider} />
        <PlpCard />
        <div className={styles.divider} />
        <PlpCard />
        <div className={styles.divider} />
        <PlpCard />
        <div className={styles.divider} />
        <PlpCard />
      </div>
    </div>
  );
};

export default plpPage;
