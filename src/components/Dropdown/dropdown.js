import React, { useState } from "react";
import styles from "./dropdown.module.css";
import Typography from "uiKit/Typography/typography";
import downChevronGreenIcon from "assets/icons/down-chevron-green-icon.svg";

const Dropdown = () => {
  const [dropDown, toggleDropDown] = useState(!false);

  const handleToggleDropDown = () => {
    console.log("handleToggleDropDown", dropDown);
    toggleDropDown((prev) => !prev);
  };

  const list = ["Westside", "TATA Cliq", "Big Basket"];

  return (
    <div className={styles.dd_wrapper}>
      <div className={styles.dd_value} onClick={handleToggleDropDown}>
        <Typography variant="body-x-small-bold" color="#12DAA8" text="Croma" />
        <img
          width={12}
          height={12}
          src={downChevronGreenIcon}
          alt="downChevronGreenIcon"
          style={{ marginLeft: "4px" }}
        />
      </div>
      {dropDown && (
        <div className={styles.dd_options}>
          {list.map((el, index) => (
            <div
              key={index}
              className={styles.dd_option}
              onClick={handleToggleDropDown}
            >
              <Typography
                variant="body-small-regular"
                color="#DCDCDC"
                text={el}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
