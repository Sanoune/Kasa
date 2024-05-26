import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import LogementRating from "../components/LogementRating";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import { getData } from "../utils/api";
import Error404 from "./Error404";
import styles from "./Logement.module.scss";

function Logement() {
  //declaration de data et usEffect pour eviter de recharger les datas à chaque render de page
  const [data, setData] = useState(null);
  useEffect(() => {
    getData().then((newData) => setData(newData));
  }, []);
  //  recupere id de l'url
  const { id } = useParams();
  const logement = data ? data.find((item) => item.id === id) : null;
  const [firstName, lastName] = logement?.host.name.split(" ") || [];

  return (
    <>
      {!logement ? (
        <Error404 />
      ) : (
        <div className={styles.cadreCarouselInfos}>
          <div>{logement && <Slideshow images={logement.pictures} />}</div>
          <div className={styles.gap}>
            <div className={styles.cadreInfos}>
              {data && (
                <>
                  <div className={styles.cadreInfosUn}>
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                  </div>
                </>
              )}
              <div className={styles.cadreTag}>
                {data &&
                  logement.tags.map((el, index) => (
                    <Tag key={index} message={el} />
                  ))}
              </div>
            </div>
            <div className={styles.cadreTagStras}>
              <div className={styles.cadreInfosDeux}>
                <div>
                  {logement && logement.host && (
                    <>
                      <h3>{firstName}</h3>
                      <h3>{lastName}</h3>
                    </>
                  )}
                </div>
                <img
                  className={styles.imgHost}
                  src={logement && logement.host && logement.host.picture}
                  alt="host-picture"
                />
              </div>
              {logement && <LogementRating rating={logement.rating} />}
            </div>
          </div>
          <div className={styles.cadre}>
            {data && (
              <>
                <Description
                  className={styles.description}
                  title="Description"
                  textDescription={logement.description}
                />
                <Description
                  className={styles.equipements}
                  title="Equipement"
                  textDescription={
                    <ul className={styles.ul}>
                      {logement.equipments.map((el, index) => (
                        <li key={index}>{el}</li>
                      ))}
                    </ul>
                  }
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Logement;
