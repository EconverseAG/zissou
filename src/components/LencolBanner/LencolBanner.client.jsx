import {Image} from '@shopify/hydrogen';
import parseUrl from '../../helpers/parseUrl';

import useMobile from '../../hooks/useMobile';

import * as styles from './LencolBanner.module.scss';

const VejaMais = parseUrl('veja-mais.png');

function LencolBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.content}>
        <h1>Lençol Zissou</h1>
        <span>Simplesmente UAU!</span>
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

export default LencolBanner;
