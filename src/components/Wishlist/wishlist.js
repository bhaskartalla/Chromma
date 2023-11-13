import React from "react";
import styles from "./wishlist.module.css";
import wishlistIcon from "assets/icons/wishlist-icon.svg";
import wishlistAddedIcon from "assets/icons/wishlist-added-icon.svg";

const Wishlist = ({ isAddedToWishlist }) => {
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

export default Wishlist;
