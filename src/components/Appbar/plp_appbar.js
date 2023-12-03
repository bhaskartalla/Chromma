import React from 'react'
import Typography from 'uiKit/Typography/typography'
import leftWhiteChevronIcon from 'assets/icons/left-white-chevron-icon.svg'
import wishlistIcon from 'assets/icons/wishlist-icon.svg'
import cartIcon from 'assets/icons/cart-icon.svg'
import styles from './plp_appbar.module.css'
import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom'
import themeHoc from 'utils/themeHoc'

const PLPAppbar = ({ pincode, theme }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handlePlpBackButtonClick = () => {
    if (location.state?.source === '/filters') {
      navigate('/')
    } else {
      navigate(-1)
    }
  }

  return (
    <div
      style={{ backgroundColor: theme?.palette.color.background }}
      className={styles.plp_appbar_wrapper}
    >
      <div className={styles.plp_appbar_title}>
        <img
          width={20}
          height={20}
          src={leftWhiteChevronIcon}
          alt='leftChevron'
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
      <div>
        <img
          width={24}
          height={24}
          src={wishlistIcon}
          alt='leftChevron'
          onClick={() => navigate('/wishlist')}
        />
        <img
          width={24}
          height={24}
          src={cartIcon}
          alt='leftChevron'
          style={{ marginLeft: '16px' }}
          onClick={() => navigate('/cart')}
        />
      </div>
    </div>
  )
}

PLPAppbar.propTypes = {
  pincode: PropTypes.any,
  theme: PropTypes.object.isRequired,
}
export default React.memo(themeHoc(PLPAppbar))
