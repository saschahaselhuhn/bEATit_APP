import styles from "./Mainmenu.module.css";

function MainMenu() {
  return (
    <div className={styles.MainMenu}>
      <div className={styles.menuHead}>Menu</div>
      <div className={styles.menuElements}>
        <hr></hr>
        <h3>Deutschland</h3>
        <h3>Spanien</h3>
        <h3>Italien</h3>
        <h3>USA</h3>
        <hr></hr>
        <h3>Kontakt</h3>
        <h3>Datenschutz</h3>
        <h3>Impressum</h3>
        <hr></hr>
        <h3>Social</h3>
        <div className={styles.social}>
          <span>
            <img src="../images/instaIco.svg" />
          </span>
          <span>
            <img src="../images/facebookIco.svg" />
          </span>
        </div>
        <img className={styles.closeBtn} src="../images/closeIco.svg" />
      </div>
    </div>
  );
}

export default MainMenu;
