import { Link } from "react-router-dom";
import logoColor from "../assets/logo-color.png";
import styles from "./Header.module.scss";
function Header() {
  return (
    <div className={styles.header}>
      <img src={logoColor} alt="image-logo-kasa"></img>
      <div className={styles.link}>
        <Link to={"/"}>Accueil</Link>
        <Link to={"./propos"}>A Propos</Link>
      </div>
    </div>
  );
}

export default Header;
