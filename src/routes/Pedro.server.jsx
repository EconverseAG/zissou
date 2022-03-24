import * as styles from '../components/hello.module.scss';

export default function Pedro() {
  return (
    <>
      <styles.StyleTag />
      <div className={styles.containerTeste}>
        <h1 className={styles.title}>Pedro</h1>
      </div>
    </>
  );
}
