import styles from "./Cards.module.css";

export type Props = {
  cardrecipesrc: string;
  cardrecipename: string;
  cardopenrecipesrc: string;
};

function RecipeCard({
  cardrecipesrc,
  cardrecipename,
  cardopenrecipesrc,
}: Props) {
  return (
    <div className={styles.recipecard}>
      <div className={styles.recipecardimgdiv}>
        <img src={cardrecipesrc} />
      </div>
      <div className={styles.recipecardnamediv}>
        <h1>{cardrecipename}</h1>
      </div>
      <div className={styles.recipecardopendiv}>
        <img src={cardopenrecipesrc} />
      </div>
    </div>
  );
}

export default RecipeCard;
