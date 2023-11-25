import React from "react";
import styles from "./end_of_scroll.module.css";
import endOfScrollImage from "assets/images/end-of-scroll-image.png";
import Typography from "uiKit/Typography/typography";
import topArrowIcon from "assets/icons/top-arrow-icon.svg";
import PropTypes from "prop-types";

const EndOfScroll = ({ handleScrollToTop }) => {
  return (
    <div className={styles.end_of_scroll_wrapper}>
      <img src={endOfScrollImage} alt="End of scroll card" />
      <Typography
        variant="title-medium-bold"
        style={{ color: "#efefef", marginTop: "8px" }}
        text="Grab it Now!"
      />
      <Typography
        variant="body-x-small-regular "
        style={{ color: "#8B8B8B", marginTop: "8px" }}
        text="Tomorrow it might be gone forever"
      />
      <div className={styles.back_to_top_button} onClick={handleScrollToTop}>
        <img width={16} height={16} src={topArrowIcon} alt="Top arrow icon" />
      </div>
    </div>
  );
};

EndOfScroll.propTypes = {
  handleScrollToTop: PropTypes.func.isRequired,
};

export default React.memo(EndOfScroll);
