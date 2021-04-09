import styles from "./Mainmenu.module.css";

export type HeaderProps = {
  onClose: () => void;
  open: boolean;
};

function MainMenu({ open, onClose }: HeaderProps) {
  return (
    <div className={`${styles.MainMenu} ${open ? styles.open : ""}`}>
      <div className={styles.MainMenuInner}>
        <div className={styles.menuHead}>Menu</div>
        <div className={styles.menuElements}>
          <hr></hr>
          <a href="/deutsch">
            <h3>Deutschland</h3>
          </a>
          <a href="/spanisch">
            <h3>Spanien</h3>
          </a>
          <a href="/italienisch">
            <h3>Italien</h3>
          </a>
          <a href="/amerikanisch">
            <h3>USA</h3>
          </a>
          <hr></hr>
          <a href="http://glanzlicht-design.de/kontakt">
            <h3>Kontakt</h3>
          </a>
          <a href="/datenschutz">
            <h3>Datenschutz</h3>
          </a>
          <a href="/impressum">
            <h3>Impressum</h3>
          </a>
          <hr></hr>
          <h3>Social</h3>
          <div className={styles.social}>
            <span>
              <a href="https://www.instagram.com/you_beatit/">
                <img src="../images/instaIco.svg" />
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/youbEATit">
                <img src="../images/facebookIco.svg" />
              </a>
            </span>
          </div>
          <img
            onClick={onClose}
            className={styles.closeBtn}
            src="../images/closeIco.svg"
          />
        </div>{" "}
      </div>
    </div>
  );
}

export default MainMenu;
