import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { lightTheme } from 'theme'
import BottomSheet from 'uiKit/BottomSheet/bottom_sheet'
import Typography from 'uiKit/Typography'
import themeHoc from 'utils/themeHoc'
import styles from './store_pickup.module.css'
import PlaceHolderImage from 'uiKit/PlaceholderImage/placeholderImage'

const StorePickup = ({
  storePickupData,
  isStorePickupBSOpen,
  handleStorePickupCloseBS,
  theme = lightTheme,
}) => {
  const { productName, mop, imageUrl = '', stores } = storePickupData
  const storeAddressCard = ({ storeLocation, formattedAddress }) => (
    <div
      style={{
        border: `1px solid ${theme.palette.color.outline}66`,
      }}
      className={styles.store_address_card}
      key={formattedAddress}
    >
      <Typography
        text={storeLocation}
        variant='body-small-bold'
        style={{
          color: theme.palette.color.onSurfaceHighContrast,
        }}
      />
      <Typography
        text={formattedAddress}
        variant='body-x-small-regular'
        style={{
          color: theme.palette.color.onSurfaceMidContrast,
        }}
      />
    </div>
  )

  return (
    <BottomSheet
      open={isStorePickupBSOpen}
      onClose={handleStorePickupCloseBS}
      theme={lightTheme}
    >
      <div className={styles.bs_wrapper}>
        <div className={styles.header_section}>
          <Typography
            text='Store Pick-up'
            variant='title-medium-bold'
            style={{
              color: theme.palette.color.onBackgroundHighContrast,
            }}
          />

          <Typography
            text='Select the store address for pickup'
            variant='body-x-small-regular'
            style={{
              color: theme.palette.color.onSurfaceLowContrast,
            }}
          />
        </div>
        <div
          style={{
            background: `${theme.palette.color.onBackgroundHighContrast}0A`,
          }}
          className={styles.product_detail}
        >
          <div
            id={imageUrl}
            style={{
              background: `linear-gradient(0deg,rgba(48, 48, 48, 0.08) 0%, rgba(48, 48, 48, 0.08) 100%) ${theme.palette.color.surface}`,
            }}
            className={styles.product_image_wrapper}
          >
            <PlaceHolderImage
              width={42}
              height={42}
              src={imageUrl}
              alt={imageUrl}
              className={styles.product_image}
            />
          </div>
          <div className={styles.product_name}>
            <Typography
              text={productName}
              variant='body-x-small-semibold'
              style={{
                color: theme.palette.color.onBackgroundHighContrast,
              }}
            />
            <Typography
              text={`₹${mop}`}
              variant='caption-xx-small-regular'
              style={{
                color: theme.palette.color.onSurfaceLowContrast,
              }}
            />
          </div>
        </div>
        <div className={styles.cards_list}>
          {stores?.map((store) => storeAddressCard(store))}
          {stores?.map((store) => storeAddressCard(store))}
          {stores?.map((store) => storeAddressCard(store))}
          {stores?.map((store) => storeAddressCard(store))}
          {stores?.map((store) => storeAddressCard(store))}
          {stores?.map((store) => storeAddressCard(store))}
        </div>
      </div>
    </BottomSheet>
  )
}

StorePickup.propTypes = {
  storePickupData: PropTypes.object,
  isStorePickupBSOpen: PropTypes.bool,
  handleStorePickupCloseBS: PropTypes.func,
  theme: PropTypes.object,
}

export default themeHoc(StorePickup)
