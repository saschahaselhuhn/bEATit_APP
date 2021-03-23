import styles from "./Head.module.css";

export type Props = {
  leftImage: string;
  centerImage: string;
  rightImage: string;
};

function Headerbar({ leftImage, centerImage, rightImage }: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.left}>
        <img className={styles.image} src={leftImage} />
      </div>
      <div className={styles.center}>
        <img className={styles.image} src={centerImage} />
      </div>
      <div className={styles.right}>
        <img className={styles.image} src={rightImage} />
      </div>
    </div>
  );
}
export default Headerbar;
