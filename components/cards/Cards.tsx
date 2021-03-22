import styles from "./Cards.module.css";

export type Props = {
  recipeSrc: string;
  recipeName: string;
  openrecipeSrc: string;
};

function Recipe({ recipeSrc, recipeName, openrecipeSrc }: Props) {
  return (
    <div className={styles.recipe}>
      <div className={styles.recipeImg}>
        <img src={recipeSrc} />
      </div>
      <div className={styles.recipeName}>
        <h3>{recipeName}</h3>
      </div>
      <div className={styles.recipeOpen}>
        <img src={openrecipeSrc} />
      </div>
    </div>
  );
}

export default Recipe;
