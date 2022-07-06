import {Image} from '@shopify/hydrogen';
import parseUrl from '../../helpers/parseUrl';

import useMobile from '../../hooks/useMobile';

import * as styles from './DuvetBanner.module.scss';

const VejaMais = parseUrl('veja-mais.png');

function DuvetBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.content}>
        <h1>Duvet Zissou</h1>
        <span>A definição de aconchego</span>
      </div>
      {!isMobile && (
        <Image
          src={VejaMais}
          className={styles.vejaMais}
          width={65}
          height={55}
        />
      )}
    </div>
  );
}

export default DuvetBanner;
