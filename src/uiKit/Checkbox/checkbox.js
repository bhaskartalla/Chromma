import React, { useState } from "react";
import checkedboxIcon from "assets/icons/checkedbox-Icon.svg";
import unCheckedboxIcon from "assets/icons/uncheckbox-Icon.svg";
import Typography from "uiKit/Typography/typography";
import PropTypes from "prop-types";
import styles from "./checkbox.module.css";

const Checkbox = ({
  textVariant,
  textColor,
  text,
  checked = false,
  onChange = () => {},
}) => {
  const [isChecked, toggleCheckbox] = useState(checked);

  const handleToggleCheckbox = () => {
    toggleCheckbox((prev) => !prev);
    onChange(isChecked);
  };

  return (
    <div className={styles.checbox_wrapper}>
      <img
        width={24}
        height={24}
        src={isChecked ? checkedboxIcon : unCheckedboxIcon}
        alt="Checkbox icon"
        onClick={handleToggleCheckbox}
      />
      <Typography
        variant={textVariant}
        text={text}
        onClick={handleToggleCheckbox}
        style={{ color: textColor }}
      />
    </div>
  );
};

Checkbox.propTypes = {
  textVariant: PropTypes.string.isRequired,
  text: PropTypes.string,
  textColor: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
