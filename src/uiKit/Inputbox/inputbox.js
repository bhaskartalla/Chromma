import React, { useState, useRef, useEffect } from 'react'
import styles from './inputbox.module.css'
import SearchIcon from 'assets/icons/search-icon'
import PropTypes from 'prop-types'
import CloseIcon from 'assets/icons/close-icon'
import themeHoc from 'utils/themeHoc'

const Inputbox = ({
  value = '',
  placeholder,
  disabled = false,
  readOnly = false,
  onChange = () => {},
  onKeyDown = () => {},
  setFocus = false,
  theme,
}) => {
  const [inputText, setInputText] = useState(value)
  const inputRef = useRef(null)

  useEffect(() => {
    setFocus && handleClick()
  }, [setFocus])

  const handleClick = () => inputRef?.current?.focus()

  const handleTextChange = (event) => {
    setInputText(event.target.value)
    onChange(event.target.value)
  }

  const handleClearText = () => {
    setInputText('')
    onChange('')
  }

  return (
    <div
      onClick={handleClick}
      style={{
        background: `${theme.palette.color.onBackgroundHighContrast}14`,
      }}
      className={styles.input_wrapper}
    >
      <SearchIcon
        fill={theme?.palette.color.onBackgroundHighContrast}
        style={{
          display: 'flex',
        }}
      />
      <input
        ref={inputRef}
        className={styles.filter_search_input}
        placeholder={placeholder}
        value={inputText}
        disabled={disabled}
        onChange={handleTextChange}
        readOnly={readOnly}
        onKeyDown={onKeyDown}
      />
      {inputText && (
        <CloseIcon
          fill={theme?.palette.color.onSurfaceVariant}
          onClick={handleClearText}
          backgroundColor={theme?.palette.color.surfaceVariant}
          height={12}
          width={12}
        />
      )}
    </div>
  )
}

Inputbox.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  setFocus: PropTypes.bool,
  theme: PropTypes.object.isRequired,
}

export default themeHoc(Inputbox)
