import styles from "./Categories.module.css";

export type Props = {
  Src: string;
  Name: string;
  Link: string;
};

function Categories({ Src, Name, Link }: Props) {
  return (
    <div className={styles.category}>
      <a href={Link}>
        <img className={styles.image} src={Src} />
        <div className={styles.name}>
          <h3>{Name}</h3>
        </div>
      </a>
    </div>
  );
}
export default Categories;
