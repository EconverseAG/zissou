import useMobile from '../../../hooks/useMobile';

import * as styles from './FormulaMagica.module.scss';

import VideoBastidores from '../../../assets/video_bastidores.mp4';

export default function FormulaMagica() {
  const {isMobile} = useMobile();

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
        <video
          className={styles.video}
          src={VideoBastidores}
          controls
          autoPlay
          loop
          muted
          width={isMobile ? 299 : 734}
          height={isMobile ? 169 : 415}
        />
      </div>
    </div>
  );
}
