import useMobile from '../../../hooks/useMobile';

import * as styles from './FormulaMagica.module.scss';

const VideoBastidores =
  'https://cdn.shopify.com/videos/c/o/v/156e36769e4d4f79ae4a87565e925381.mp4';

export default function FormulaMagica() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.FormulaMagicaContainer}>
      <strong className={styles.FormulaMagicaTitle}>
        O LABORATÓRIO ZISSOU
      </strong>
      <span className={styles.FormulaMagicaSubtitle}>
        O desenvolvimento dos produtos Zissou é feito em conjunto com vocês,
        aplicando as melhores tecnologias do mercado, para redefinir sua relação
        com o sono
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
