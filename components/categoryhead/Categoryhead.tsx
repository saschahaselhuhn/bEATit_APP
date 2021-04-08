import styles from "./Categoryhead.module.css";

export type Props = {
  categoryImg: string;
  categoryName: string;
};

function Categoryhead({ categoryImg, categoryName }: Props) {
  return (
    <div className={styles.recipe}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${categoryImg})` }}
      >
        <div className={styles.headlineBG}>
          <div className={styles.headline}>
            <h1>{categoryName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoryhead;
