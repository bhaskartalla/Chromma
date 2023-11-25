import React, { useRef } from "react";
import styles from "./plp_card.module.css";
import Wishlist from "components/Wishlist/wishlist";
import Typography from "uiKit/Typography/typography";
import ratingIcon from "assets/icons/rating-icon.svg";
import nonServiceableIcon from "assets/icons/non-serviceable-icon.svg";
import truckIcon from "assets/icons/truck-icon.svg";
import availableIcon from "assets/icons/available-icon.svg";
import Neupass from "components/NeuPass/neupass";
import PropTypes from "prop-types";
import LoadDefaultImg from "uiKit/PlaceholderImage/placeholderImage";
import { useNavigate } from "react-router-dom";

const PlpCard = ({ productDetails }) => {
  const imageUrl = productDetails?.plpImage;
  const skuId = productDetails?.skuId;
  const productName = productDetails?.name;
  const mop = productDetails?.price?.value;
  const mrp = productDetails?.mrp?.value;
  const discount = productDetails?.discountPercentageValue;
  const emiAmount = productDetails?.minimumEmiAmount;
  const ratings = productDetails?.numberOfRatings;
  const averageRating = productDetails?.averageRating;
  const neuCoins = productDetails?.neuPassTotal;
  const expressDelivery =
    productDetails?.inventory?.deliveryModes?.expressDelivery;
  const standardDelivery =
    productDetails?.inventory?.deliveryModes?.standardDelivery;
  const storePickup = productDetails?.inventory?.deliveryModes?.storePickup;
  const isAvailable = productDetails?.inventory?.isAvailable;
  const isServiceable = productDetails?.inventory?.isServiceable;
  const pinCode = productDetails?.inventory?.pinCode;
  const productTag = productDetails?.productTag;
  const productTag1 = productDetails?.productTag1;

  const navigate = useNavigate();

  const storePickUpRef = useRef(null);
  const handleStorePickup = (event, shipNode) => {
    console.log("handleStorePickup", shipNode);
    event.stopPropagation();
  };

  const handleNonServiceable = (event) => {
    console.log("handleNonServiceable");
    event.stopPropagation();
  };

  const handleProductCardClick = (event) => {
    console.log("handleProductCardClick");

    navigate("/product-description", { state: { skuId } });
  };

  const getExpressTime = (timeStamp) => {
    const time = new Date(timeStamp);
    let hours = time.getHours();
    let amPm = "AM";
    if (time.getHours() === 12) {
      amPm = "PM";
    } else if (time.getHours() > 12) {
      hours = time.getHours() - 12;
      amPm = "PM";
    }
    let minutes = time.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes} ${amPm}`;
  };

  const deliveryDetails = (
    src,
    primaryText,
    secondaryText,
    handleSecondaryTextClick
  ) => {
    return (
      <div style={{ marginTop: "8px" }}>
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
            style={{
              color: "#A6A6A6",
              marginRight: "3px",
            }}
          />
          {secondaryText && (
            <Typography
              ref={storePickUpRef}
              variant="caption-xxx-small-semibold"
              text={secondaryText}
              style={{
                color: "#A6A6A6",
                textDecoration: "underline",
              }}
              onClick={(event, param) => handleSecondaryTextClick(event, param)}
            />
          )}
        </div>
      </div>
    );
  };

  const productImage = () => (
    <div className={styles.image_section}>
      <div className={styles.tag_wishlist_wrapper}>
        {/* <div className={styles.card_tag}>
          <Typography
            variant="caption-xxx-small-semibold"
            text={"Deals of the day"}
            style={{
              color: "#00390A",
            }}
          />
        </div> */}
        <Wishlist isAddedToWishlist={true} />
      </div>
      <div className={styles.product_image_wrapper}>
        <LoadDefaultImg
          src={imageUrl}
          alt={skuId}
          className={styles.product_image}
          component={"img"}
        />
      </div>
    </div>
  );

  const productBadge = (text, bgColor, textColor) => (
    <>
      {text && (
        <div
          style={{ backgroundColor: bgColor }}
          className={styles.product_badge}
        >
          <Typography
            variant="caption-xxx-small-semibold"
            text={text}
            style={{
              color: textColor,
            }}
          />
        </div>
      )}
    </>
  );

  const mopBlock =
    mop && mrp >= mop ? (
      <Typography
        variant="body-medium-bold"
        text={mop}
        style={{
          color: "#EFEFEF",
          marginRight: "6px",
        }}
      />
    ) : (
      ""
    );

  const mrpAndDiscountDetails = (
    <>
      {mrp > mop && (
        <Typography
          variant="body-small-regular"
          text={`₹${mrp}`}
          style={{
            color: "#a6a6a6",
            textDecoration: "line-through",
          }}
        />
      )}
      {Boolean(parseInt(discount.split("%")[0])) && (
        <div className={styles.discount_chip}>
          <Typography
            variant="caption-xxx-small-semibold"
            text={`${discount} OFF`}
            style={{
              color: "#DCDCDC",
            }}
          />
        </div>
      )}
    </>
  );

  const emiDetailsOrMrpDetails = emiAmount ? (
    <>
      <Typography
        variant="body-small-regular"
        text={"or"}
        style={{
          marginRight: "6px",
          color: "#EFEFEF",
        }}
      />
      <Typography
        variant="body-x-small-semibold"
        text={`₹${emiAmount}/mo*`}
        style={{
          color: "#A6A6A6",
        }}
      />
    </>
  ) : (
    mrpAndDiscountDetails
  );

  let deliveryModes;
  if (expressDelivery) {
    deliveryModes = deliveryDetails(
      truckIcon,
      `Express Delivery by ${getExpressTime(
        expressDelivery[0].estimatedDeliveryDate
      )} `
    );
  } else if (standardDelivery) {
    deliveryModes = deliveryDetails(
      truckIcon,
      `Delivery by ${getExpressTime(
        standardDelivery[0].estimatedDeliveryDate
      )} `
    );
  }

  let storePickUp;
  if (storePickup) {
    storePickUp = deliveryDetails(
      availableIcon,
      "Available for Pickup",
      "View Stores",
      (event) => handleStorePickup(event, storePickup[0].shipNode)
    );
  }

  let nonServiceable;
  if (!(isAvailable && isServiceable)) {
    nonServiceable = deliveryDetails(
      nonServiceableIcon,
      "Non serviceable at this Pincode ",
      pinCode,
      (event) => handleNonServiceable(event)
    );
  }

  const productDetailsBlock = () => (
    <div className={styles.details}>
      {ratings ? (
        <div className={styles.review_ratings}>
          <Typography
            variant="caption-xx-small-semibold"
            text={Math.round((averageRating + Number.EPSILON) * 100) / 100}
          />
          <img
            width={12}
            height={12}
            src={ratingIcon}
            alt="leftChevron"
            style={{ margin: "0 4px" }}
          />
          <Typography
            variant="caption-xx-small-regular"
            text={`${ratings} ratings`}
          />
        </div>
      ) : (
        ""
      )}
      <div className={styles.product_name}>
        <span className={styles.wrap_product_name}>
          <Typography
            variant="body-small-bold"
            text={productName}
            style={{
              color: "#EFEFEF",
            }}
          />
        </span>
      </div>
      <div className={styles.mrp_mop}>
        {mopBlock}
        {emiDetailsOrMrpDetails}
      </div>
      <div className={styles.mrp_discount}>
        {emiAmount ? mrpAndDiscountDetails : ""}
      </div>
      <Neupass
        isLoggedIn={false}
        coins={Math.round((neuCoins + Number.EPSILON) * 100) / 100}
      />
      {deliveryModes}
      {storePickUp}
      {nonServiceable}
    </div>
  );

  return (
    <div
      id="product-card"
      className={styles.card_wrapper}
      onClick={handleProductCardClick}
    >
      <div className={styles.card_section}>
        {productImage()}
        {productDetailsBlock()}
      </div>
      <div className={styles.badges}>
        {productBadge(productTag, "#BEE3FF", "#191919")}
        {productBadge(productTag1, "#1D649A", "#FFFFFF")}
      </div>
    </div>
  );
};

PlpCard.propTypes = {
  productDetails: PropTypes.object.isRequired,
};

export default PlpCard;
