import React, { useState, useEffect } from 'react'
import Typography from 'uiKit/Typography/typography'
import PropTypes from 'prop-types'
import styles from './checkbox.module.css'

const Checkbox = ({
  textVariant,
  textColor,
  text,
  width = 24,
  height = 24,
  checked = false,
  onChange = () => {},
  fillChecked,
  fillOutline,
}) => {
  const [isChecked, toggleCheckbox] = useState(checked)

  useEffect(() => {
    toggleCheckbox(checked)
  }, [checked])

  const handleToggleCheckbox = () => {
    toggleCheckbox((prev) => !prev)
    onChange(isChecked)
  }

  return (
    <div className={styles.checbox_wrapper}>
      <div style={{ display: 'flex' }} onClick={handleToggleCheckbox}>
        {checked ? (
          <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='24' height='24' rx='4' fill={fillChecked} />
            <path
              d='M7.5 12L10.5 15L16.5 9'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        ) : (
          <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='0.5'
              y='0.5'
              width='23'
              height='23'
              rx='3.5'
              stroke={fillOutline}
            />
          </svg>
        )}
      </div>

      <Typography
        variant={textVariant}
        text={text}
        onClick={handleToggleCheckbox}
        style={{ color: textColor }}
      />
    </div>
  )
}

Checkbox.propTypes = {
  textVariant: PropTypes.string.isRequired,
  text: PropTypes.string,
  textColor: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  fillChecked: PropTypes.string.isRequired,
  fillOutline: PropTypes.string.isRequired,
}

export default Checkbox
