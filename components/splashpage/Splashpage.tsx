import styles from "./Splashpage.module.css";

function SplashScreen() {
  return (
    <div className={styles.gridContainer}>
      <a href="../overview">
        <div className={styles.center}>
          <img className={styles.image} src="../images/splash/splash_01.png" />
        </div>
        <div className={styles.center}>
          <img
            className={styles.centerimage}
            src="../images/splash/splash_02.png"
          />
        </div>
        <div className={styles.center}>
          <img className={styles.image} src="../images/splash/splash_03.png" />
        </div>
      </a>
    </div>
  );
}
export default SplashScreen;
