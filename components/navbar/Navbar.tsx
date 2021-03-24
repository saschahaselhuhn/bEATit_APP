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
        <img src={homeBtn} />
      </div>
      <div className={styles.searchBtn}>
        <img src={searchBtn} />
      </div>
      <div className={styles.socialBtn}>
        <img src={socialBtn} />
      </div>
    </div>
  );
}
export default Navbar;
