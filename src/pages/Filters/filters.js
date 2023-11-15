import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./filters.module.css";
import Typography from "uiKit/Typography/typography";
import plpResponse from "apiData/plp_response.json";
import Button from "uiKit/Button/button";
import crossCloseIcon from "assets/icons/cross-close-icon.svg";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log({ location });

  const headerBlock = (
    <div className={styles.header_bar}>
      <Typography
        variant="body-medium-regular"
        style={{ color: "#212121", left: "50%", position: "absolute" }}
        text="Filters"
      />
      <img
        width={16}
        height={16}
        src={crossCloseIcon}
        alt="Close icon"
        style={{ marginLeft: "auto" }}
        onClick={() =>
          navigate("/product-listing", { state: { source: "/filters" } })
        }
      />
    </div>
  );
  const bottomBlock = (
    <div className={styles.bottom_bar}>
      <Typography
        variant="body-x-small-regular"
        style={{ color: "#777" }}
        text={`${plpResponse?.data?.filterItemCount} ${
          plpResponse?.data?.filterItemCount > 1 ? "items" : "item"
        }`}
      />
      <div className={styles.rest_apply_wrapper}>
        <Typography
          variant="label-button-x-small"
          style={{ color: "#088466" }}
          text={"RESET"}
          onClick={() => console.log("Reset")}
        />
        <Button
          text="Apply"
          textVariant="label-button-x-small"
          textColor="#FFFFFF"
          style={{
            backgroundColor: "#088466",
            width: "128px",
            height: "40px",
          }}
          handleOnClick={() => console.log("Apply")}
        />
      </div>
    </div>
  );

  return (
    <div id="filter_wrapper" className={styles.filter_wrapper}>
      {headerBlock}
      {bottomBlock}
    </div>
  );
};

export default Filters;
