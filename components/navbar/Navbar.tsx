import styles from "./Navbar.module.css";

function Navigationbar() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.homeBtn}>
        <a href="../index">
          <img src="../images/homeBtn.svg" />
        </a>
      </div>
      <div className={styles.searchBtn}>
        <img src="../images/searchBtn.svg" />
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
