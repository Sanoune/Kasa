import { Link } from "react-router-dom";
import styles from "./Error404.module.scss";
function Error() {
  return (
    <div className={styles.cadre}>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n&apos;existe pas.</h3>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}

export default Error;
