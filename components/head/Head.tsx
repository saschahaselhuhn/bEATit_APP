import styles from "./Head.module.css";
import Router from "next/router";

type HeaderProps = {
  onBurgerClick: () => void;
};

function Headerbar({ onBurgerClick }: HeaderProps) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.backBtn}>
        <img src="../images/backBtn.svg" onClick={() => Router.back()} />
      </div>
      <div className={styles.logoBtn}>
        <img src="../images/logowhite.svg" />
      </div>
      <div className={styles.menuBtn}>
        <img onClick={onBurgerClick} src="../images/menuBtn.svg" />
      </div>
    </div>
  );
}
export default Headerbar;
