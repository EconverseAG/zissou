import useMobile from '../../../hooks/useMobile';
import * as styles from './experienciaZissou.module.scss';

import ExperienciaZissouDesktop from './ExperienciaZissouDesktop';
import ExperienciaZissouMobile from './ExperienciaZissouMobile.client';

export default function ExperienciaZissou() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.ExperienciaZissouContainer}>
      <strong className={styles.ExperienciaZissouTitle}>
        Onde você quer viver <br /> a{' '}
        <span className={styles.ExperienciaZissouTitleOtherColor}>
          experiência zissou
        </span>
        ?
      </strong>
      <span className={styles.ExperienciaZissouSubtitle}>
        Agende um atendimento personalizado ou venha nos visitar se estiver por
        perto :)
      </span>
      {isMobile ? <ExperienciaZissouMobile /> : <ExperienciaZissouDesktop />}
    </div>
  );
}
