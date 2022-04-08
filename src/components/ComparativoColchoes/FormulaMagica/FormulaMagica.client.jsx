import * as styles from './FormulaMagica.module.scss';

export default function FormulaMagica() {
  return (
    <div className={styles.FormulaMagicaContainer}>
      <strong className={styles.FormulaMagicaTitle}>
        A <p className={styles.FormulaMagicaTitleOtherColor}>FÓRMULA MÁGICA</p>{' '}
        DO LABORATÓRIO ZISSOU
      </strong>
      <span className={styles.FormulaMagicaSubtitle}>
        Começamos a redefinir a sua relação com o sono antes mesmo de lançarmos
        nossos produtos. Nosso desenvolvimento é feito junto com vocês aplicando
        as melhores tecnologias do mercado
      </span>
      <div className={styles.FormulaMagicaImage}>
        <iframe
          width="734"
          height="415"
          src="https://www.youtube.com/embed/hMInNaBSUig"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
