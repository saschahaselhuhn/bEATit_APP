import styles from "./Head.module.css";

export type Props = {
  backBtn: string;
  logoBtn: string;
  menuBtn: string;
};

function Headerbar({ backBtn, logoBtn, menuBtn }: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.backBtn}>
        <img src={backBtn} />
      </div>
      <div className={styles.logoBtn}>
        <img src={logoBtn} />
      </div>
      <div className={styles.menuBtn}>
        <img src={menuBtn} />
      </div>
    </div>
  );
}
export default Headerbar;
