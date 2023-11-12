import React from "react";
import styles from "./typography.module.css";
import PropTypes from "prop-types";

const Typography = ({ variant, text, children, ...rest }) => (
  <span style={{ ...rest }} className={styles[variant]}>
    {children || text}
  </span>
);

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.any,
  children: PropTypes.any,
};
export default Typography;
