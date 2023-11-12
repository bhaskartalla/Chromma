import React from "react";
import PlpAppbar from "components/Appbar/plp_appbar";
import Searchbar from "components/Searchbar/searchbar";
import FilterChipsSection from "./FilterChipsSection/filter_chips_section";
import PlpCard from "./PlpCard/plp_card";

const plpPage = () => {
  return (
    <div>
      <PlpAppbar pincode={400013} />
      <Searchbar />
      <div style={{ marginTop: "20px" }}>
        <FilterChipsSection />
      </div>
      <PlpCard />
    </div>
  );
};

export default plpPage;
