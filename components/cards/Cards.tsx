import styles from "./Cards.module.css";

export type Props = {
  cardrecipename: string;
  cardopenrecipesrc: string;
  cardrecipesrc: string;
};

function RecipeCard(props: Props) {
  return (
    <div className={styles.recipecard}>
      <img className={styles.recipecardimg} src={props.cardrecipesrc} />
      <h1 className={styles.recipecardname}>{props.cardrecipename}</h1>
      <img className={styles.recipecardopen} src={props.cardrecipesrc} />
    </div>
  );
}

export default RecipeCard;
