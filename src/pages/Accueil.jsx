import { useEffect, useState } from "react";
import imageBackground from "../assets/img-accueil.png";
import ImageCard from "../components/ImageCard";
import LogementCard from "../components/LogementCard";
import styles from "./Accueil.module.scss";

function Accueil() {
  const [data, setData] = useState([]);

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

  return (
    <>
      <div>
        <ImageCard
          text="Chez vous, partout et ailleurs"
          image={imageBackground}
        />
      </div>
      <div className={styles.cadreAccueil}>
        <div className={styles.cardFlex}>
          {data.length > 0 ? (
            data.map((logement) => (
              <LogementCard key={logement.id} logement={logement} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Accueil;
