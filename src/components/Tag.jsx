import PropTypes from "prop-types";
import styles from "./Tag.module.scss";
function Tag({ message }) {
  return (
    <div className={styles.CadreTag}>
      <p>{message}</p>
    </div>
  );
}

Tag.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Tag;
