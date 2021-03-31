import styles from "./Recipehead.module.css";

export type Props = {
  recipeImg: string;
  recipeName: string;
  consumers: string;
  difficulty: string;
};

function Recipehead({ recipeImg, recipeName, consumers, difficulty }: Props) {
  return (
    <div className={styles.recipe}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${recipeImg})` }}
      >
        <div className={styles.headlineBG}>
          <div className={styles.headline}>
            <h1>{recipeName}</h1>
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.gridcontainer}>
          <div className={styles.ConsumerIco}>
            <img src="../images/consumers.svg" />
          </div>
          <div className={styles.DifficultyIco}>
            <img src="../images/difficulty.svg" />
          </div>
          <div className={styles.ConsumerVal}>{consumers}</div>

          <div className={styles.DifficultyVal}>{difficulty}</div>
        </div>
      </div>
    </div>
  );
}

export default Recipehead;
