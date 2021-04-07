import styles from "./Stepfields.module.css";

export type Props = {
  stepname: string;
  stepinstruction: string;
};

function Stepfields({ stepname, stepinstruction }: Props) {
  return (
    <div className={styles.Container}>
      <div className={styles.stepname}>
        <h2>{stepname}</h2>
      </div>
      <div className={styles.stepinstruction}>{stepinstruction}</div>
    </div>
  );
}

export default Stepfields;
