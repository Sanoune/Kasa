import imageBackground from "../assets/img-montagne.png";
import Description from "../components/Description";
import ImageCard from "../components/ImageCard";
import styles from "./Propos.module.scss";
function Propos() {
  return (
    <>
      <ImageCard image={imageBackground} />
      <div className={styles.cadre}>
        <Description
          className={styles.element}
          title="Fiabilité"
          textDescription={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
        <Description
          className={styles.element}
          title="Respect"
          textDescription={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Description
          className={styles.element}
          title="Service"
          textDescription={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Description
          className={styles.element}
          title="Sécurité"
          textDescription={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </>
  );
}

export default Propos;
