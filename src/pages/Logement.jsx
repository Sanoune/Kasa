import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import buttonBack from "../assets/arrow-back.png";
import buttonNext from "../assets/arrow-next.png";
import Description from "../components/Description";
import Star from "../components/Star";
import Tag from "../components/Tag";
import styles from "./Logement.module.scss";

function Logement() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setTimeout(() => setData(jsonData), 1500);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const { id } = useParams();
  const currentData = data ? data.find((item) => item.id === id) : null;
  const [indexCarousel, setIndexCarousel] = useState(0);
  function handleClickNext() {
    const newIndex = indexCarousel + 1;
    setIndexCarousel(newIndex);
    if (newIndex > currentData.pictures.length - 1) {
      setIndexCarousel(0);
    }
  }

  function handleClickPrev() {
    const newIndex = indexCarousel - 1;
    setIndexCarousel(newIndex);
    if (newIndex < 0) {
      setIndexCarousel(currentData.pictures.length - 1);
    }
  }

  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Star key={i} filled={i <= rating} />);
    }
    return stars;
  }

  return (
    <>
      <div className={styles.cadreCarouselInfos}>
        <div>
          <div className={styles.carrousel}>
            <button onClick={handleClickPrev} className={styles.buttonBack}>
              <img src={buttonBack} alt="button-back" />
            </button>
            {data && (
              <img
                className={styles.imgCarousel}
                src={currentData.pictures[indexCarousel]}
                alt="carousel-image"
              />
            )}
            <button onClick={handleClickNext} className={styles.buttonNext}>
              <img src={buttonNext} alt="button-next" />
            </button>
          </div>
        </div>
        <div className={styles.gap}>
          <div className={styles.cadreInfos}>
            {data && (
              <>
                <div className={styles.cadreInfosUn}>
                  <h2>{currentData.title}</h2>
                  <p>{currentData.location}</p>
                </div>
              </>
            )}
            <div className={styles.cadreTag}>
              {data &&
                currentData.tags.map((el, index) => (
                  <Tag key={index} message={el} />
                ))}
            </div>
          </div>
          <div className={styles.cadreTagStras}>
            <div className={styles.cadreInfosDeux}>
              <div>
                {currentData && currentData.host && (
                  <React.Fragment>
                    <h3>{currentData.host.name.split(" ")[0]}</h3>
                    <h3>{currentData.host.name.split(" ")[1]}</h3>
                  </React.Fragment>
                )}
              </div>

              <img
                className={styles.imgHost}
                src={
                  currentData && currentData.host && currentData.host.picture
                }
                alt="host-picture"
              />
            </div>
            <div className={styles.cadreStars}>
              {data && renderStars(currentData.rating)}
            </div>
          </div>
        </div>
        <div className={styles.cadre}>
          {data && (
            <>
              <Description
                className={styles.description}
                title="Description"
                textDescription={currentData.description}
              />
              <Description
                className={styles.equipements}
                title="Equipement"
                textDescription={
                  <ul className={styles.ul}>
                    {currentData.equipments.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Logement;
