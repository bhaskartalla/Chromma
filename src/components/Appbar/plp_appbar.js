import React from 'react'
import Typography from 'uiKit/Typography'
import LeftChevronIcon from 'assets/icons/left-chevron-icon'

import WishlistIcon from 'assets/icons/wishlist-icon'
import CartIcon from 'assets/icons/cart-icon'

import styles from './plp_appbar.module.css'
import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom'
import themeHoc from 'utils/themeHoc'

const PlpAppbar = ({ pincode, theme }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handlePlpBackButtonClick = () => {
    if (location.state?.source === '/filters') {
      navigate('/')
    } else {
      navigate(-1)
    }
  }

  const handleWishlistIconClick = () => {
    navigate('/wishlist')
  }

  return (
    <div
      style={{ backgroundColor: theme?.palette.color.background }}
      className={styles.plp_appbar_wrapper}
    >
      <div className={styles.plp_appbar_title}>
        <LeftChevronIcon
          width={20}
          height={20}
          fill={theme.palette.color.onBackgroundHighContrast}
          onClick={handlePlpBackButtonClick}
        />
        <Typography
          variant='body-x-small-semibold'
          text={'Deliver to'}
          style={{ marginLeft: '8px' }}
        />
        <Typography
          variant='body-x-small-semibold'
          text={pincode}
          style={{
            marginLeft: '4px',
            color: theme?.palette.color.primary,
          }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <WishlistIcon
          theme={theme}
          width={24}
          height={24}
          onClick={handleWishlistIconClick}
        />

        <CartIcon
          fill={theme.palette.color.onBackgroundHighContrast}
          onClick={() => navigate('/cart')}
          style={{ marginLeft: '16px' }}
        />
      </div>
    </div>
  )
}

PlpAppbar.propTypes = {
  pincode: PropTypes.any,
  theme: PropTypes.object.isRequired,
}
export default React.memo(themeHoc(PlpAppbar))
