import {Image} from '@shopify/hydrogen/client';
import * as styles from './Partners.module.scss';

import FastShop from '../../assets/logo_Fast.webp';
import ZissouCinza from '../../assets/zissou-cinza.png';
import Fasano from '../../assets/logo_Fasano.webp';
import Breton from '../../assets/logo_Breton.webp';
import Ornare from '../../assets/logo_Ornare.webp';

import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';

export default function Partners({color}) {
  const zissouContext = useZissouProduct();
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.PartnersContainer} ${
        zissouContext?.isSpark
          ? styles.spark
          : zissouContext?.isBlue
          ? styles.blue
          : ''
      }`}
      style={{background: color ? color : ''}}
    >
      <div className={styles.PartnersContent}>
        <div className={styles.PartnersLeft}>
          <strong className={styles.PartnersLeftTitle}>
            EXPERIÊNCIA ZISSOU NA FAST SHOP
          </strong>
          <span
            style={{color: color ? '#fff' : ''}}
            className={styles.PartnersLeftSubtitle}
          >
            Confira os espaços especiais
          </span>
          <div className={styles.brands}>
            <Image
              src={ZissouCinza}
              width={isMobile ? '102' : '155'}
              height={isMobile ? '27' : '40'}
              loading={'lazy'}
            />
            <Image
              src={FastShop}
              width={isMobile ? '56' : '85.7'}
              height={isMobile ? '26' : '40.55'}
            />
          </div>
        </div>
        <div className={styles.PartnersRight}>
          <strong className={styles.PartnersRightTitle}>
            MAIS UM GOSTINHO DE ZISSOU
          </strong>
          <span
            style={{color: color ? '#fff' : ''}}
            className={styles.PartnersRightSubtitle}
          >
            Outras marcas parceiras
          </span>
          <div className={styles.brands}>
            <Image
              src={Fasano}
              width={isMobile ? '86' : '131'}
              height={isMobile ? '26' : '40'}
              loading={'lazy'}
            />
            <Image
              src={Breton}
              width={isMobile ? '106' : '132'}
              height={isMobile ? '38' : '59'}
            />
            <Image
              src={Ornare}
              width={isMobile ? '100' : '131'}
              height={isMobile ? '51' : '80'}
              loading={'lazy'}
            />
          </div>
        </div>
      </div>
      <a href="/pages/casa-zissou#fast-shop" className={styles.CTA}>
        SAIBA MAIS
      </a>
    </div>
  );
}
