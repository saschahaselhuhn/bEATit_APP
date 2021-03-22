import styles from "./Categories.module.css";

export type Props = {
  categorySrc: string;
  categoryName: string;
  opencategoryLink: string;
};

function Categories({ categorySrc, categoryName, opencategoryLink }: Props) {
  return (
    <div className={styles.category}>
      <a href={opencategoryLink}>
        <img className={styles.image} src={categorySrc} />
        <div className={styles.name}>
          <h3>{categoryName}</h3>
        </div>
      </a>
    </div>
  );
}
export default Categories;
