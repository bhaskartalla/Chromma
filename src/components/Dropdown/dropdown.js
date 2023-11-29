import React, { useState } from "react";
import styles from "./dropdown.module.css";
import Typography from "uiKit/Typography/typography";
import downChevronGreenIcon from "assets/icons/down-chevron-green-icon.svg";
import PropTypes from "prop-types";

const Dropdown = ({ brandList }) => {
  const [dropDown, toggleDropDown] = useState(false);

  const handleToggleDropDown = () => {
    toggleDropDown((prev) => !prev);
  };

  const handleRedirectionToSerp = () => {
    // Navigate to SERP page
  };

  return (
    <div className={styles.dd_wrapper}>
      <div className={styles.dd_value} onClick={handleToggleDropDown}>
        <Typography
          variant="body-x-small-bold"
          style={{ color: "#12DAA8" }}
          text={brandList[0].name}
        />
        <img
          width={12}
          height={12}
          src={downChevronGreenIcon}
          alt="downChevronGreenIcon"
          style={{ marginLeft: "4px" }}
        />
      </div>
      {dropDown && (
        <div className={styles.dd_options}>
          {brandList.slice(1).map((brand, index) => (
            <div
              key={brand.code}
              className={styles.dd_option}
              onClick={handleRedirectionToSerp}
            >
              <Typography
                variant="body-small-regular"
                style={{ color: "#DCDCDC" }}
                text={brand.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  brandList: PropTypes.array.isRequired,
};
export default React.memo(Dropdown);
