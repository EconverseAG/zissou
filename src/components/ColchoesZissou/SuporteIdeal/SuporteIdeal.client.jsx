import {Image} from '@shopify/hydrogen';
import * as styles from './SuporteIdeal.module.scss';

import Espuma from '../../../assets/espuma.png';
import Mola from '../../../assets/mola.png';
import EspumaMobile from '../../../assets/espuma_mobile.png';
import MolaMobile from '../../../assets/mola_mobile.png';
import useMobile from '../../../hooks/useMobile';

export default function SuporteIdeal() {
  const {isMobile} = useMobile();

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
          ESPUMA OU MOLA?
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
          <strong
            className={styles.SuporteIdealBottomContentTitle}
            style={{marginBottom: '-20px'}}
          >
            ESTABILIDADE E <br /> SUPORTE UNIFORME
          </strong>
          <Image
            src={isMobile ? EspumaMobile : Espuma}
            width={isMobile ? 170 : 493}
            height={isMobile ? 115 : 329}
            style={{
              marginTop: isMobile ? 'auto' : '',
              marginRight: isMobile ? 'auto' : '',
            }}
          />
          <span className={styles.SuporteIdealBottomContentSubtitle}>
            Espuma de poliuretano de alta {!isMobile && <br />} densidade para
            distribuição
            {!isMobile && <br />} uniforme de peso
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
          <Image
            src={isMobile ? MolaMobile : Mola}
            width={isMobile ? 154 : 490}
            height={isMobile ? 169 : 327}
            style={{marginLeft: isMobile ? 'auto' : ''}}
          />
          <span className={styles.SuporteIdealBottomContentSubtitle}>
            Sistema híbrido com molas {!isMobile && <br />} para maior
            adaptabilidade aos {!isMobile && <br />} movimentos
          </span>
        </div>
      </div>
    </div>
  );
}
