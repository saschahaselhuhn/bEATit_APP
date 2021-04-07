import styles from "./Navbar.module.css";
export type HeaderProps = {
  onBurgerClick: () => void;
};

function Navigationbar({ onBurgerClick }: HeaderProps) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.homeBtn}>
        <a href="../index">
          <img src="../images/homeBtn.svg" />
        </a>
      </div>
      <div className={styles.searchBtn}>
        <img onClick={onBurgerClick} src="../images/mainmenuIco2.svg" />
      </div>
      <div className={styles.socialBtn}>
        <a
          href="https://www.instagram.com/you_beatit/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="../images/instaIco.svg" />
        </a>
      </div>
    </div>
  );
}
export default Navigationbar;
