import {Image} from '@shopify/hydrogen';
import parseUrl from '../../helpers/parseUrl';

const NaToca = parseUrl('na_toca.webp');
const NaCama = parseUrl('na_cama.webp');
const NoDuvet = parseUrl('no_duvet.webp');

import * as styles from './TocaPossibilidades.module.scss';
import useMobile from '../../hooks/useMobile';

export default function TocaPossibilidades() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.TocaPossibilidadesContainer}>
      <strong className={styles.Title}>POSSIBILIDADES</strong>
      <span className={styles.Subtitle}>
        A modularidade da Toca Zissou oferece diversas possibilidades de uso
      </span>
      <div className={styles.FlexItems}>
        <div className={styles.FlexItem}>
          <Image
            src={NaToca}
            width={isMobile ? 379 : 536}
            height={isMobile ? 202 : 285}
          />
          <span className={styles.Text}>Na Toca</span>
        </div>
        <div className={styles.FlexItem}>
          <Image
            src={NaCama}
            width={isMobile ? 313 : 442}
            height={isMobile ? 182 : 256}
          />
          <span className={styles.Text}>Na Cama</span>
        </div>
        <div className={styles.FlexItem}>
          <Image
            src={NoDuvet}
            width={isMobile ? 365 : 515}
            height={isMobile ? 175 : 246}
          />
          <span className={styles.Text}>No Duvet</span>
        </div>
      </div>
    </div>
  );
}
