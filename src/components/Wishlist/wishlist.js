import React from "react";
import styles from "./wishlist.module.css";
import wishlistIcon from "../../assets/icons/wishlist-icon.svg";
import wishlistAddedIcon from "../../assets/icons/wishlist-added-icon.svg";

const Wishlist = ({ isAddedToWishlist }) => {
  return (
    <>
      {isAddedToWishlist ? (
        <div
          style={{
            backgroundColor: "rgba(18, 218, 168, 0.12)",
          }}
          className={styles.wishlist_wrapper}
        >
          <img
            width={16}
            height={16}
            src={wishlistAddedIcon}
            alt="wishlistAddedIcon"
          />
        </div>
      ) : (
        <div
          style={{ backgroundColor: "#444347" }}
          className={styles.wishlist_wrapper}
        >
          <img width={16} height={16} src={wishlistIcon} alt="wishlistIcon" />
        </div>
      )}
    </>
  );
};

export default Wishlist;
