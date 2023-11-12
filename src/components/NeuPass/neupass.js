import React from "react";
import styles from "./neupass.module.css";
import Typography from "uiKit/Typography/typography";
import neuIcon from "assets/icons/neu-icon.svg";

const Neupass = () => {
  return (
    <div className={styles.neu_coins}>
      <img
        width={16}
        height={16}
        src={neuIcon}
        alt="neuIcon"
        style={{ marginRight: "4px" }}
      />
      <Typography
        variant="caption-xxx-small-regular"
        text={"Earn up to "}
        color="#EFEFEF"
        marginRight="3px"
      />
      <Typography
        variant="caption-xxx-small-semibold"
        text={" 300 NeuCoins "}
        color="#EFEFEF"
      />
    </div>
  );
};

export default Neupass;
