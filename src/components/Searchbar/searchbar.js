import React from 'react'
import styles from './searchbar.module.css'
import Typography from 'uiKit/Typography/typography'
import PropTypes from 'prop-types'
import themeHoc from 'utils/themeHoc'
import SearchBlackIcon from 'assets/icons/search-icon'
import CloseIcon from 'assets/icons/close-icon'

const Searchbar = ({
  searchedText,
  handleSearchBarClick,
  handleOnCloseClick,
  theme,
  withCloseIcon = true,
}) => {
  return (
    <div
      id='searchbar_wrapper'
      style={{
        background: `${theme?.palette.color.onBackgroundHighContrast}1f`,
      }}
      className={styles.searchbar_wrapper}
      onClick={handleSearchBarClick}
    >
      <div className={styles.search_text}>
        <SearchBlackIcon fill={theme?.palette.color.onBackgroundHighContrast} />
        <Typography
          variant='body-x-small-regular'
          text={searchedText}
          style={{
            marginLeft: '8px',
            color: theme?.palette.color.onBackgroundHighContrast,
          }}
        />
      </div>
      {withCloseIcon && (
        <CloseIcon
          fill={theme?.palette.color.onSurfaceVariant}
          fillBackground={theme?.palette.color.surfaceVariant}
          onClick={handleOnCloseClick}
          backgroundColor={theme?.palette.color.surfaceVariant}
          height={24}
          width={24}
          withBackground
        />
      )}
    </div>
  )
}

Searchbar.propTypes = {
  searchedText: PropTypes.string,
  handleSearchBarClick: PropTypes.func,
  handleOnCloseClick: PropTypes.func,
  theme: PropTypes.object,
  withCloseIcon: PropTypes.bool,
}

export default React.memo(themeHoc(Searchbar))
