import React from "react";
import styles from "./wishlist.module.css";
import wishlistIcon from "assets/icons/wishlist-icon.svg";
import wishlistAddedIcon from "assets/icons/wishlist-added-icon.svg";
import PropTypes from "prop-types";

const Wishlist = ({ isAddedToWishlist = false }) => {
  return (
    <>
      {!isAddedToWishlist ? (
        <div
          className={`${styles.wishlist_wrapper} ${
            isAddedToWishlist && styles.is_added_wishlist
          }`}
        >
          <img
            width={16}
            height={16}
            src={wishlistAddedIcon}
            alt="wishlistAddedIcon"
          />
        </div>
      ) : (
        <div className={styles.wishlist_wrapper}>
          <img width={16} height={16} src={wishlistIcon} alt="wishlistIcon" />
        </div>
      )}
    </>
  );
};

Wishlist.propTypes = {
  isAddedToWishlist: PropTypes.bool,
};

export default React.memo(Wishlist);
