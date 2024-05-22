import PropTypes from "prop-types";
import styles from "./ImageCard.module.scss";

function ImageCard({ text, image }) {
  return (
    <div className={styles.margin}>
      <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.filtre}>
          {" "}
          <h1 className={styles.colortext}>{text}</h1>
        </div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string.isRequired,
};
export default ImageCard;
