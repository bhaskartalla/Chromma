import React from "react";
import styles from "./plp_card.module.css";
import Wishlist from "components/Wishlist/wishlist";
import Typography from "uiKit/Typography/typography";
import ratingIcon from "assets/icons/rating-icon.svg";
import nonServiceableIcon from "assets/icons/non-serviceable-icon.svg";
import truckIcon from "assets/icons/truck-icon.svg";
import availableIcon from "assets/icons/available-icon.svg";
import Neupass from "components/NeuPass/neupass";

const PlpCard = ({ isAddedToWishlist }) => {
  const DeliveryDetails = ({ src, primaryText, secondaryText }) => {
    return (
      <div className={styles.delivery_details}>
        <img
          width={24}
          height={24}
          src={src}
          alt={`${src}`}
          style={{ marginRight: "4px" }}
        />
        <Typography
          variant="caption-xxx-small-semibold"
          text={primaryText}
          color="#A6A6A6"
          marginRight="3px"
        />
        {secondaryText && (
          <Typography
            variant="caption-xxx-small-semibold"
            text={secondaryText}
            color="#A6A6A6"
            textDecoration="underline"
          />
        )}
      </div>
    );
  };

  const ProductImage = () => (
    <div className={styles.image_section}>
      <div className={styles.tag_wishlist_wrapper}>
        <div className={styles.card_tag}>
          <Typography
            variant="caption-xxx-small-semibold"
            text={"Deals of the day"}
            color="#00390A"
          />
        </div>
        <Wishlist isAddedToWishlist={true} />
      </div>
      <div className={styles.product_image_wrapper}>
        <img
          src="https://media.croma.com/image/upload/v1692282023/Croma%20Assets/Communication/Mobiles/Images/275649_hectep.png"
          alt="plpImage"
          className={styles.product_image}
        />
      </div>
    </div>
  );

  const ProductBadge = (text, bgColor, textColor) => (
    <div style={{ backgroundColor: bgColor }} className={styles.product_badge}>
      <Typography
        variant="caption-xxx-small-semibold"
        text={text}
        color={textColor}
      />
    </div>
  );

  const ProductDetails = () => (
    <div className={styles.details}>
      <div className={styles.review_ratings}>
        <Typography variant="caption-xx-small-semibold" text={4.5} />
        <img
          width={12}
          height={12}
          src={ratingIcon}
          alt="leftChevron"
          style={{ margin: "0 4px" }}
        />
        <Typography variant="caption-xx-small-regular" text={"418 ratings"} />
      </div>
      <div className={styles.product_name}>
        <Typography
          variant="body-small-bold"
          text={"Croma 1.5 Ton 3 Star Split AC (CRLA018SAD)"}
          color="#EFEFEF"
        />
      </div>
      <div className={styles.mrp_mop}>
        <Typography
          variant="body-medium-bold"
          text={"₹31,990"}
          color="#EFEFEF"
        />
        <Typography
          variant="body-small-regular"
          text={" or "}
          color="#EFEFEF"
        />
        <Typography
          variant="body-x-small-semibold"
          text={"₹4,232/mo*"}
          color="#A6A6A6"
        />
      </div>
      <div className={styles.discount_emi}>
        <Typography
          variant="body-small-regular"
          text={"₹84,900"}
          color="#a6a6a6"
          textDecoration="line-through"
        />
        <div className={styles.discount_chip}>
          <Typography
            variant="caption-xxx-small-semibold"
            text={"29% OFF"}
            color="#DCDCDC"
          />
        </div>
      </div>
      <Neupass />
      <div style={{ marginTop: "8px" }}>
        <DeliveryDetails
          src={truckIcon}
          primaryText="Express Delivery by 9.00 PM today"
        />
        <DeliveryDetails
          src={availableIcon}
          primaryText="Available for Pickup"
          secondaryText="View Stores"
        />
        <DeliveryDetails
          src={nonServiceableIcon}
          primaryText="Non serviceable at this Pincode"
          secondaryText="400001"
        />
      </div>
    </div>
  );

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_section}>
        {ProductImage()}
        {ProductDetails()}
      </div>
      <div className={styles.badges}>
        {ProductBadge("Sustainable product", "#BEE3FF", "#191919")}
        <div style={{ marginLeft: "8px" }}>
          {ProductBadge("New in Croma", "#1D649A", "#FFFFFF")}
        </div>
      </div>
    </div>
  );
};

export default PlpCard;
