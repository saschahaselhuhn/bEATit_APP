import styles from "./Head.module.css";

function Headerbar() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.backBtn}>
        <img src="../images/backBtn.svg" />
      </div>
      <div className={styles.logoBtn}>
        <img src="../images/logowhite.svg" />
      </div>
      <div className={styles.menuBtn}>
        <img src="../images/menuBtn.svg" />
      </div>
    </div>
  );
}
export default Headerbar;
