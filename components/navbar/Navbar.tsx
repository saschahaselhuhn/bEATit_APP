import styles from "./Navbar.module.css";

export type Props = {
  homeBtn: string;
  searchBtn: string;
  socialBtn: string;
};

function Navbar({ homeBtn, searchBtn, socialBtn }: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.homeBtn}>
        <img src="./images/homeBtn.svg" />
      </div>
      <div className={styles.searchBtn}>
        <img src="./images/searchBtn.svg" />
      </div>
      <div className={styles.socialBtn}>
        <img src="./images/shareBtn.svg" />
      </div>
    </div>
  );
}
export default Navbar;
