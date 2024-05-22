import logoBlack from "../assets/logo-black.png";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.containeFooter}>
      <img src={logoBlack} alt="image-logo-kasa"></img>
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
