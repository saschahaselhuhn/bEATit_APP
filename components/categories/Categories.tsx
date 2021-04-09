import styles from "./Categories.module.css";

export type Props = {
  Src: string;
  LinkDeutsch: string;
  LinkSpanisch: string;
  LinkItalienisch: string;
  LinkAmerikanisch: string;
};

function Categories({
  Src,
  LinkDeutsch,
  LinkSpanisch,
  LinkItalienisch,
  LinkAmerikanisch,
}: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.deutsch}>
        <div className={styles.category}>
          <a href={LinkDeutsch}>
            <img className={styles.image} src={Src} />
            <div className={styles.name}>
              <h3>Deutschland</h3>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.spanisch}>
        <div className={styles.category}>
          <a href={LinkSpanisch}>
            <img className={styles.image} src={Src} />
            <div className={styles.name}>
              <h3>Spanien</h3>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.italienisch}>
        <div className={styles.category}>
          <a href={LinkItalienisch}>
            <img className={styles.image} src={Src} />
            <div className={styles.name}>
              <h3>Italien</h3>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.amerikanisch}>
        <div className={styles.category}>
          <a href={LinkAmerikanisch}>
            <img className={styles.image} src={Src} />
            <div className={styles.name}>
              <h3>U.S.A.</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Categories;
