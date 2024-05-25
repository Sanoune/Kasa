import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./LogementCard.module.scss";

function LogementCard({ logement }) {
  return (
    //lien renvoi vers logement sur lequel je clique
    <Link className={styles.link} to={`/logement/${logement.id}`}>
      <img src={logement.cover}></img>
    </Link>
  );
}

LogementCard.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default LogementCard;
