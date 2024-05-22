import classNames from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";
import arrow from "../assets/arrow-top.png";
import styles from "./Description.module.scss";

function Description({ textDescription, title, className }) {
  const [open, setOpen] = useState(false);

  const arrowClasses = classNames(styles.arrow, {
    [styles.rotated]: open,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classNames(styles.cadre, className)}>
      <div className={styles.cadreDescription}>
        <p>{title}</p>
        <button onClick={handleClick}>
          <img src={arrow} className={arrowClasses} alt="Arrow" />
        </button>
      </div>
      {open && <div className={styles.textDescription}>{textDescription}</div>}
    </div>
  );
}

Description.propTypes = {
  textDescription: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Description;
