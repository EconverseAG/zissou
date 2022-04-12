import {Image} from '@shopify/hydrogen';
import * as styles from './SuporteIdeal.module.scss';

import Espuma from '../../../assets/espuma.png';
import Mola from '../../../assets/mola.png';

export default function SuporteIdeal() {
  return (
    <div className={styles.SuporteIdealContainer}>
      <div className={styles.SuporteIdealTop}>
        <strong className={styles.SuporteIdealTopTitle}>
          QUAL É O SUPORTE IDEAL PARA VOCÊ?
        </strong>
        <span className={styles.SuporteIdealTopSubtitle}>
          Na hora de escolher o colchão, você precisa tratar como prioridade
          <br />
          quem sempre te apoia:{' '}
          <strong className={styles.SuporteIdealTopSubtitleBolder}>
            o sistema de suporte
          </strong>
        </span>
      </div>
      <div className={styles.SuporteIdealMiddle}>
        <strong className={styles.SuporteIdealMiddleTitle}>
          MOLA OU ESPUMA?
        </strong>
        <span className={styles.SuporteIdealMiddleSubtitle}>
          Temos as duas opções, você decide
        </span>
      </div>
      <div className={styles.SuporteIdealBottom}>
        <div
          className={[
            styles.SuporteIdealBottomContent,
            styles.SuporteIdealBottomLeft,
          ].join(' ')}
        >
          <strong className={styles.SuporteIdealBottomContentTitle}>
            ESTABILIDADE E <br /> SUPORTE UNIFORME
          </strong>
          <Image src={Espuma} width="520" height="297" />
          <span className={styles.SuporteIdealBottomContentSubtitle}>
            Espuma de poliuretano de alta densidade para distribuição uniforme
            de peso
          </span>
        </div>
        <div
          className={[
            styles.SuporteIdealBottomContent,
            styles.SuporteIdealBottomRight,
          ].join(' ')}
        >
          <strong className={styles.SuporteIdealBottomContentTitle}>
            BOUNCE COM <br /> ADAPTAÇÃO AO CORPO
          </strong>
          <Image src={Mola} width="520" height="188" />
          <span className={styles.SuporteIdealBottomContentSubtitle}>
            Sistema híbrido com molas Leggett & Platt para maior adaptabilidade
            aos movimentos
          </span>
        </div>
      </div>
    </div>
  );
}
