import styles from "./Recipefields.module.css";

export type Props = {
  wert: string;
  einheit: string;
  zutat: string;
};

function Recipefields({ wert, einheit, zutat }: Props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.wert}>{wert}</div>
      <div className={styles.einheit}>{einheit}</div>
      <div className={styles.zutat}>{zutat} </div>
    </div>
  );
}

export default Recipefields;
