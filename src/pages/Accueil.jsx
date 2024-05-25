import { useEffect, useState } from "react";
import imageBackground from "../assets/img-accueil.png";
import ImageCard from "../components/ImageCard";
import LogementCard from "../components/LogementCard";
import { getData } from "../utils/api";
import styles from "./Accueil.module.scss";

function Accueil() {
  //declaration de data et usEffect pour eviter de recharger les datas à chaque render de page
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((newData) => setData(newData));
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
            //map sur tableau de logement pour chacun des logements retourne un composant card
            data.map((logement) => (
              //key necessaire affichage tableau composant
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
