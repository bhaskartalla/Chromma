import React from "react";
import styles from "./typography.module.css";
import PropTypes from "prop-types";

const Typography = ({ variant, text, children, style, ...rest }) => (
  <span style={{ ...style }} className={styles[variant]} {...rest}>
    {children || text}
  </span>
);

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.any,
  children: PropTypes.any,
};
export default Typography;
