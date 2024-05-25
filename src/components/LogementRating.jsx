import PropTypes from "prop-types";
import styles from "./LogementRating.module.scss";
import Star from "./Star";

export default function LogementRating({ rating }) {
  return (
    <div className={styles.cadreStars}>
      {
        // creation tableau de 0 à 4 affichage start en fonction du rating
      }
      {Array.from(Array(5).keys()).map((i) => (
        //retourne true ajoute une etoile full ou false retourne une etoile empty
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

LogementRating.propTypes = {
  rating: PropTypes.string.isRequired,
};
