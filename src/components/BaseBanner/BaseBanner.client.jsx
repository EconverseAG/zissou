import * as styles from './BaseBanner.module.scss';

export default function BaseBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <strong>Base Zissou</strong>
        <span>Estabilidade para dormir e viver</span>
      </div>
    </div>
  );
}
