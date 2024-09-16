import React, { useRef } from 'react'
import styles from './plp_card.module.css'
import Typography from 'uiKit/Typography'
import RatingIcon from 'assets/icons/rating-icon'
import NonServiceableIcon from 'assets/icons/non-serviceable-icon'
import TruckIcon from 'assets/icons/truck-icon'
import AvailableIcon from 'assets/icons/available-icon'
import Neupass from 'components/NeuPass/neupass'
import PropTypes from 'prop-types'
import PlaceHolderImage from 'uiKit/PlaceholderImage/placeholderImage'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import WishlistIcon from 'assets/icons/wishlist-icon'
import { useDispatch } from 'react-redux'
import {
  addItemToWishlist,
  removeItemFromWishList,
} from '../state/cartOutlineState/action_creators'
import { fetchStorePickupApiResponse } from '../state/plpState/action_creators'

const PlpCard = ({
  productDetails,
  wishlistSkuList,
  handleStorePickupOpenBS,
}) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const imageUrl = productDetails?.plpImage
  const skuId = productDetails?.skuId
  const productName = productDetails?.name
  const mop = productDetails?.price?.value
  const mrp = productDetails?.mrp?.value
  const discount = productDetails?.discountPercentageValue
  const emiAmount = productDetails?.minimumEmiAmount
  const ratings = productDetails?.numberOfRatings
  const averageRating = productDetails?.averageRating
  const neuCoins = productDetails?.neuPassTotal
  const expressDelivery =
    productDetails?.inventory?.deliveryModes?.expressDelivery
  const standardDelivery =
    productDetails?.inventory?.deliveryModes?.standardDelivery
  const storePickup = productDetails?.inventory?.deliveryModes?.storePickup
  const isAvailable = productDetails?.inventory?.isAvailable
  const isServiceable = productDetails?.inventory?.isServiceable
  const pinCode = productDetails?.inventory?.pinCode
  const productTag = productDetails?.productTag
  const productTag1 = productDetails?.productTag1

  const navigate = useNavigate()
  const storePickUpRef = useRef(null)

  const isAddedToWishlist = wishlistSkuList.includes(productDetails.skuId)

  const handleStorePickup = (event) => {
    dispatch(
      fetchStorePickupApiResponse({
        category: 'electronics',
        shipNode: storePickup[0].shipNode,
      })
    )
    handleStorePickupOpenBS({
      shipNode: storePickup[0].shipNode,
      imageUrl,
      productName,
      mop,
    })
    event.stopPropagation()
  }

  const handleNonServiceable = (event) => {
    event.stopPropagation()
  }

  const handleProductCardClick = () => {
    navigate('/product-description', { state: { skuId } })
  }

  const handleWishListIconClick = (event) => {
    event.stopPropagation()
    if (isAddedToWishlist) {
      dispatch(removeItemFromWishList(productDetails.skuId))
    } else {
      dispatch(addItemToWishlist(productDetails.skuId))
    }
  }

  const getExpressTime = (timeStamp) => {
    const time = new Date(timeStamp)
    let hours = time.getHours()
    let amPm = 'AM'
    if (time.getHours() === 12) {
      amPm = 'PM'
    } else if (time.getHours() > 12) {
      hours = time.getHours() - 12
      amPm = 'PM'
    }
    let minutes = time.getMinutes()
    if (hours < 10) {
      hours = `0${hours}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    return `${hours}:${minutes} ${amPm}`
  }

  const deliveryDetails = (
    icon,
    primaryText,
    secondaryText,
    handleSecondaryTextClick
  ) => {
    return (
      <div style={{ marginTop: '8px' }}>
        <div className={styles.delivery_details}>
          {icon}
          <Typography
            variant='caption-xxx-small-semibold'
            text={primaryText}
            style={{
              color: theme.palette.color.onBackgroundLowContrast,
              margin: '0 4px',
            }}
          />
          {secondaryText && (
            <Typography
              ref={storePickUpRef}
              variant='caption-xxx-small-semibold'
              text={secondaryText}
              style={{
                color: theme.palette.color.onBackgroundLowContrast,
                textDecoration: 'underline',
              }}
              onClick={(event, param) => handleSecondaryTextClick(event, param)}
            />
          )}
        </div>
      </div>
    )
  }

  const productImage = () => (
    <div
      style={{
        background: theme.palette.color.surface,
      }}
      className={styles.image_section}
    >
      <div className={styles.tag_wishlist_wrapper}>
        {/* <div
          style={{
            background: theme.palette.color.success,
          }}
          className={styles.card_tag}
        >
          <Typography
            variant='caption-xxx-small-semibold'
            text={'Deals of the day'}
            style={{
              color: theme.palette.color.onSuccess,
            }}
          />
        </div> */}
        <WishlistIcon
          withBackground
          isAddedToWishlist={isAddedToWishlist}
          theme={theme}
          style={{
            marginLeft: 'auto',
          }}
          onClick={handleWishListIconClick}
        />
      </div>
      <div className={styles.product_image_wrapper}>
        <PlaceHolderImage
          src={imageUrl}
          alt={skuId}
          className={styles.product_image}
        />
      </div>
    </div>
  )

  const productBadge = (text, bgColor, textColor) => (
    <>
      {text && (
        <div
          style={{ backgroundColor: bgColor }}
          className={styles.product_badge}
        >
          <Typography
            variant='caption-xxx-small-semibold'
            text={text}
            style={{
              color: textColor,
            }}
          />
        </div>
      )}
    </>
  )

  const mopBlock =
    mop && mrp >= mop ? (
      <Typography
        variant='body-medium-bold'
        text={`₹${mop}`}
        style={{
          color: theme.palette.color.onBackgroundHighContrast,
          marginRight: '6px',
        }}
      />
    ) : (
      ''
    )

  const mrpAndDiscountDetails = (
    <>
      {mrp > mop && (
        <Typography
          variant='body-small-regular'
          text={`₹${mrp}`}
          style={{
            color: theme.palette.color.onBackgroundLowContrast,
            textDecoration: 'line-through',
          }}
        />
      )}

      {Boolean(parseInt(discount.split('%')[0])) && (
        <div
          style={{
            border: `1px solid ${theme.palette.color.outline}7A`,
          }}
          className={styles.discount_chip}
        >
          <Typography
            variant='caption-xxx-small-semibold'
            text={`${discount} OFF`}
            style={{
              color: theme.palette.color.onSurfaceHighContrast,
            }}
          />
        </div>
      )}
    </>
  )

  const emiDetailsOrMrpDetails = emiAmount ? (
    <>
      <Typography
        variant='body-small-regular'
        text={'or'}
        style={{
          marginRight: '6px',
          color: theme.palette.color.onBackgroundHighContrast,
        }}
      />
      <Typography
        variant='body-x-small-semibold'
        text={`₹${emiAmount}/mo*`}
        style={{
          color: theme.palette.color.onBackgroundLowContrast,
        }}
      />
    </>
  ) : (
    mrpAndDiscountDetails
  )

  let deliveryModes
  if (expressDelivery) {
    deliveryModes = deliveryDetails(
      <TruckIcon
        fillBackground={theme.palette.color.surfaceLowest}
        fill={theme.palette.color.onBackgroundMidContrast}
      />,
      `Express Delivery by ${getExpressTime(
        expressDelivery[0].estimatedDeliveryDate
      )} `
    )
  } else if (standardDelivery) {
    deliveryModes = deliveryDetails(
      <TruckIcon
        fillBackground={theme.palette.color.surfaceLowest}
        fill={theme.palette.color.onBackgroundMidContrast}
      />,
      `Delivery by ${getExpressTime(
        standardDelivery[0].estimatedDeliveryDate
      )} `
    )
  }

  let storePickUp
  if (storePickup) {
    storePickUp = deliveryDetails(
      <AvailableIcon
        fillBackground={theme.palette.color.surfaceLowest}
        fill={theme.palette.color.onBackgroundMidContrast}
      />,
      'Available for Pickup',
      'View Stores',
      (event) => handleStorePickup(event)
    )
  }

  let nonServiceable
  if (!(isAvailable && isServiceable)) {
    nonServiceable = deliveryDetails(
      <NonServiceableIcon
        fillBackground={theme.palette.color.surfaceLowest}
        fill={theme.palette.color.warning}
      />,

      'Non serviceable at this Pincode ',
      pinCode,
      (event) => handleNonServiceable(event)
    )
  }

  const productDetailsBlock = () => (
    <div className={styles.details}>
      {ratings ? (
        <div style={{ display: 'flex' }}>
          <Typography
            variant='caption-xx-small-semibold'
            text={Math.round((averageRating + Number.EPSILON) * 100) / 100}
            style={{
              color: theme.palette.color.onBackgroundHighContrast,
            }}
          />
          <RatingIcon
            fill={theme.palette.color.secondary}
            style={{ margin: '0 4px' }}
          />
          <Typography
            variant='caption-xx-small-regular'
            text={`${ratings} ratings`}
            style={{
              color: theme.palette.color.onBackgroundMidContrast,
            }}
          />
        </div>
      ) : (
        ''
      )}
      <div className={styles.product_name}>
        <span className={styles.wrap_product_name}>
          <Typography
            variant='body-small-bold'
            text={productName}
            style={{
              color: theme.palette.color.onBackgroundHighContrast,
            }}
          />
        </span>
      </div>
      <div className={styles.mrp_mop}>
        {mopBlock}
        {emiDetailsOrMrpDetails}
      </div>
      <div className={styles.mrp_discount}>
        {emiAmount ? mrpAndDiscountDetails : ''}
      </div>
      <Neupass
        isLoggedIn={false}
        coins={Math.round((neuCoins + Number.EPSILON) * 100) / 100}
      />
      {deliveryModes}
      {storePickUp}
      {nonServiceable}
    </div>
  )

  return (
    <div
      id='product-card'
      className={styles.card_wrapper}
      onClick={handleProductCardClick}
    >
      <div className={styles.card_section}>
        {productImage()}
        {productDetailsBlock()}
      </div>
      <div className={styles.badges}>
        {productBadge(productTag, '#BEE3FF', '#191919')}
        {productBadge(productTag1, '#1D649A', '#FFFFFF')}
      </div>
    </div>
  )
}

PlpCard.propTypes = {
  productDetails: PropTypes.object.isRequired,
  wishlistSkuList: PropTypes.array.isRequired,
}

export default PlpCard
