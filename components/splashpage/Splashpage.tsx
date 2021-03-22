import styles from "./Splashpage.module.css";

export type Props = {
  topImage: string;
  centerImage: string;
  bottomImage: string;
};

function Splashpage({ topImage, centerImage, bottomImage }: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.center}>
        <img className={styles.image} src={topImage} />
      </div>
      <div className={styles.center}>
        <img className={styles.image} src={centerImage} />
      </div>
      <div className={styles.center}>
        <img className={styles.image} src={bottomImage} />
      </div>
    </div>
  );
}
export default Splashpage;
