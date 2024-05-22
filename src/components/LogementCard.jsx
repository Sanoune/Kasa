import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./LogementCard.module.scss";

function LogementCard({ logement }) {
  function handleClick() {}

  return (
    <>
      <Link
        className={styles.link}
        onClick={handleClick}
        to={`/logement/${logement.id}`}
      >
        <img src={logement.cover}></img>
      </Link>
    </>
  );
}

LogementCard.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default LogementCard;
