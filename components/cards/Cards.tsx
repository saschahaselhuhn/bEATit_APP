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
      <img className={styles.recipecardimg} src={cardrecipesrc} />
      <h1 className={styles.recipecardname}>{cardrecipename}</h1>
      <img className={styles.recipecardopen} src={cardopenrecipesrc} />
    </div>
  );
}

export default RecipeCard;
