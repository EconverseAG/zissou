import {Image} from '@shopify/hydrogen';
import parseUrl from '../../helpers/parseUrl';

import useMobile from '../../hooks/useMobile';

import * as styles from './TocaBanner.module.scss';

const VejaMais = parseUrl('veja-mais.png');

function TocaBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.content}>
        <h1>TOCA ZISSOU</h1>
        <span>ABRACE SEUS INSTINTOS</span>
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

export default TocaBanner;
