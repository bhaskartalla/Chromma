import React from "react";
import Typography from "uiKit/Typography/typography";
import leftWhiteChevronIcon from "assets/icons/left-white-chevron-icon.svg";
import wishlistIcon from "assets/icons/wishlist-icon.svg";
import cartIcon from "assets/icons/cart-icon.svg";
import styles from "./plp_appbar.module.css";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const PLPAppbar = ({ pincode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePlpBackButtonClick = () => {
    if (location.state?.source === "/filters") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={styles.plp_appbar_wrapper}>
      <div className={styles.plp_appbar_title}>
        <img
          width={24}
          height={24}
          src={leftWhiteChevronIcon}
          alt="leftChevron"
          onClick={handlePlpBackButtonClick}
        />
        <Typography
          variant="body-x-small-semibold"
          text={"Deliver to"}
          style={{ marginLeft: "8px" }}
        />
        <Typography
          variant="body-x-small-semibold"
          text={pincode}
          style={{
            marginLeft: "4px",
            color: "#12DAA8",
          }}
        />
      </div>
      <div>
        <img
          width={24}
          height={24}
          src={wishlistIcon}
          alt="leftChevron"
          onClick={() => navigate("/wishlist")}
        />
        <img
          width={24}
          height={24}
          src={cartIcon}
          alt="leftChevron"
          style={{ marginLeft: "16px" }}
          onClick={() => navigate("/cart")}
        />
      </div>
    </div>
  );
};

PLPAppbar.propTypes = {
  pincode: PropTypes.any,
};
export default React.memo(PLPAppbar);
