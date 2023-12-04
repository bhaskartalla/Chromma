import React, { useState } from 'react'
import styles from './dropdown.module.css'
import Typography from 'uiKit/Typography/typography'
import DownChevronIcon from 'assets/icons/down-chevron-icon'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'

const Dropdown = ({ brandList }) => {
  const [dropDown, toggleDropDown] = useState(false)
  const theme = useTheme()
  const handleToggleDropDown = () => {
    toggleDropDown((prev) => !prev)
  }

  const handleRedirectionToSerp = () => {
    // Navigate to SERP page
  }

  return (
    <div className={styles.dd_wrapper}>
      <div
        style={{
          background: `${theme.palette.color.primary}1E`,
        }}
        className={styles.dd_value}
        onClick={handleToggleDropDown}
      >
        <Typography
          variant='body-x-small-bold'
          style={{ color: theme.palette.color.primary }}
          text={brandList[0].name}
        />
        <DownChevronIcon
          fill={theme.palette.color.primary}
          style={{
            marginLeft: '4px',
          }}
        />
      </div>
      {dropDown && (
        <div
          style={{
            background: theme.palette.color.surfaceLow,
          }}
          className={styles.dd_options}
        >
          {brandList.slice(1).map((brand, index) => (
            <div
              key={brand.code}
              className={styles.dd_option}
              onClick={handleRedirectionToSerp}
            >
              <Typography
                variant='body-small-regular'
                style={{
                  color: theme.palette.color.onSurfaceHighContrast,
                }}
                text={brand.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  brandList: PropTypes.array.isRequired,
}
export default React.memo(Dropdown)
