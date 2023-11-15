import React from "react";
import styles from "./button.module.css";
import Typography from "uiKit/Typography/typography";
import PropTypes from "prop-types";

const Button = ({
  textVariant,
  textColor,
  text,
  children,
  handleOnClick,
  style,
}) => {
  return (
    <button className={styles.button} style={{ ...style }}>
      <Typography
        variant={textVariant}
        text={text || children}
        style={{ color: textColor }}
        onClick={handleOnClick}
      />
    </button>
  );
};

Button.propTypes = {
  textVariant: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  children: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;
