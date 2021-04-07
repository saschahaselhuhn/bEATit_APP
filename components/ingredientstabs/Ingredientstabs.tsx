import styles from "./Ingredientstabs.module.css";

export type Props = {
  stepslink: string;
};

function Ingredientstabs({ stepslink }: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.ingredients}>
        <img src="../images/ingredientsActiveBtn.svg" />
      </div>
      <div className={styles.steps}>
        <a href={stepslink}>
          <img src="../images/stepsInactiveBtn.svg" />
        </a>
      </div>
    </div>
  );
}

export default Ingredientstabs;
