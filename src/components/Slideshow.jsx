import PropTypes from "prop-types";
import { useState } from "react";
import buttonBack from "../assets/arrow-back.png";
import buttonNext from "../assets/arrow-next.png";
import styles from "./Slideshow.module.scss";

function Slideshow({ images }) {
  const [indexCarousel, setIndexCarousel] = useState(0);

  //function img suivante
  function handleClickNext() {
    const newIndex = indexCarousel + 1;
    setIndexCarousel(newIndex);
    if (newIndex > images.length - 1) {
      setIndexCarousel(0);
    }
  }
  //fonction img precedente
  function handleClickPrev() {
    const newIndex = indexCarousel - 1;
    setIndexCarousel(newIndex);
    if (newIndex < 0) {
      //pour au dernier index (4) du tableau
      setIndexCarousel(images.length - 1);
    }
  }

  return (
    <div className={styles.carrousel}>
      <button onClick={handleClickPrev} className={styles.buttonBack}>
        <img src={buttonBack} alt="button-back" />
      </button>
      <img
        className={styles.imgCarousel}
        src={images[indexCarousel]}
        alt="carousel-image"
      />

      <button onClick={handleClickNext} className={styles.buttonNext}>
        <img src={buttonNext} alt="button-next" />
      </button>
    </div>
  );
}

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Slideshow;
