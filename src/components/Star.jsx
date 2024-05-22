import PropTypes from "prop-types";
import starEmpty from "../assets/starEmpty.png";
import starFull from "../assets/starFull.png";
import styles from "./Star.module.scss";

function Star({ filled }) {
  return (
    <img
      src={filled ? starFull : starEmpty}
      alt={filled ? "Full Star" : "Empty Star"}
      className={styles.star}
    />
  );
}

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default Star;
