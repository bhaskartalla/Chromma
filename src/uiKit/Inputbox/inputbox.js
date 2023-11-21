import React, { useState, useRef, useEffect } from "react";
import styles from "./inputbox.module.css";
import searchWhiteIcon from "assets/icons/search-white-icon.svg";
import searchBlackIcon from "assets/icons/search-black-icon.svg";
import PropTypes from "prop-types";
import crossCloseIcon from "assets/icons/cross-close-icon.svg";

const Inputbox = ({
  isDarkThemed = true,
  value = "",
  placeholder,
  disabled = false,
  readOnly = false,
  onChange = () => {},
  setFocus = false,
}) => {
  const [inputText, setInputText] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    setFocus && handleClick();
  }, [setFocus]);

  const handleClick = () => inputRef?.current?.focus();

  const handleTextChange = (event) => {
    setInputText(event.target.value);
    onChange(event.target.value);
  };

  const handleClearText = () => {
    setInputText("");
    onChange("");
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.input_wrapper} ${
        !isDarkThemed && styles.input_wrapper_white
      }`}
    >
      <img
        width={16}
        height={16}
        src={isDarkThemed ? searchWhiteIcon : searchBlackIcon}
        alt="Search icon"
      />
      <input
        ref={inputRef}
        className={styles.filter_search_input}
        placeholder={placeholder}
        value={inputText}
        disabled={disabled}
        onChange={handleTextChange}
        readOnly={readOnly}
      />
      {inputText && (
        <img
          width={10}
          height={10}
          src={crossCloseIcon}
          alt="circleCloseIcon"
          onClick={handleClearText}
        />
      )}
    </div>
  );
};

Inputbox.propTypes = {
  isDarkThemed: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  setFocus: PropTypes.bool,
};

export default Inputbox;
