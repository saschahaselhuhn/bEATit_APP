import styles from "./Stepstabs.module.css";

export type Props = {
  ingredientslink: string;
};

function Stepstabs({ ingredientslink }: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.ingredientsBtn}>
        <a href={ingredientslink}>
          <img src="../images/ingredientsInactiveBtn.svg" />{" "}
        </a>
      </div>
      <div className={styles.stepsBtn}>
        <img src="../images/stepsActiveBtn.svg" />
      </div>
    </div>
  );
}

export default Stepstabs;
