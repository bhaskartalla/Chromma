import React from "react";
import Typography from "uiKit/Typography/typography";
import leftChevronIcon from "assets/icons/left-chevron-icon.svg";
import wishlistIcon from "assets/icons/wishlist-icon.svg";
import cartIcon from "assets/icons/cart-icon.svg";
import styles from "./plp_appbar.module.css";
import PropTypes from "prop-types";

const PLPAppbar = ({ pincode }) => {
  return (
    <div className={styles.plp_appbar_wrapper}>
      <div className={styles.plp_appbar_title}>
        <img width={24} height={24} src={leftChevronIcon} alt="leftChevron" />
        <Typography
          variant="body-x-small-semibold"
          text={"Deliver to"}
          marginLeft="8px"
        />
        <Typography
          variant="body-x-small-semibold"
          text={pincode}
          marginLeft="4px"
          color="#12DAA8"
        />
      </div>
      <div>
        <img width={24} height={24} src={wishlistIcon} alt="leftChevron" />
        <img
          width={24}
          height={24}
          src={cartIcon}
          alt="leftChevron"
          style={{ marginLeft: "16px" }}
        />
      </div>
    </div>
  );
};

PLPAppbar.propTypes = {
  pincode: PropTypes.any,
};
export default PLPAppbar;
