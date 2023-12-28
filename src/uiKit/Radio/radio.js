import React, { useState, useEffect } from 'react'
import Typography from 'uiKit/Typography/typography'
import PropTypes from 'prop-types'
import styles from './radio.module.css'

const Radio = ({
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
  const [isChecked, toggleRadio] = useState(checked)

  useEffect(() => {
    toggleRadio(checked)
  }, [checked])

  const handleToggleRadio = () => {
    toggleRadio((prev) => !prev)
    onChange(isChecked)
  }

  return (
    <div className={styles.radio_wrapper}>
      <div style={{ display: 'flex' }} onClick={handleToggleRadio}>
        {checked ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
          >
            <rect
              x='0.5'
              y='0.5'
              width='23'
              height='23'
              rx='11.5'
              stroke={fillChecked}
            />
            <path
              d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
              fill={fillChecked}
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
          >
            <rect
              x='0.5'
              y='0.5'
              width='23'
              height='23'
              rx='11.5'
              stroke={fillOutline}
            />
          </svg>
        )}
      </div>

      <Typography
        variant={textVariant}
        text={text}
        onClick={handleToggleRadio}
        style={{ color: textColor }}
      />
    </div>
  )
}

Radio.propTypes = {
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

export default Radio
