import {Image, Link} from '@shopify/hydrogen/client';
import * as styles from './Partners.module.scss';

import Fasano from '../../assets/logo_Fasano.png';
import FastShop from '../../assets/logo_Fast.png';
import Breton from '../../assets/logo_Breton.png';
import Ornare from '../../assets/logo_Ornare.png';

import useMobile from '../../hooks/useMobile';

export default function Partners({color}) {
  const {isMobile} = useMobile();

  return (
    <div
      className={styles.PartnersContainer}
      style={{background: color ? color : ''}}
    >
      <div className={styles.PartnersLeft}>
        <strong style={{color: color ? '#fff' : ''}}>ONDE TEM ZISSOU</strong>
        <p>
          Experimente nossos produtos <br /> de Norte a Sul do Brasil
        </p>
        <Link to="/pages/casa-zissou">Quero Visitar</Link>
      </div>
      <div className={styles.PartnersRight}>
        <span style={{color: color ? '#fff' : ''}}>Marcas Parceiras</span>
        <div>
          <Image
            src={Fasano}
            width={isMobile ? '77' : '131'}
            height={isMobile ? '23' : '40'}
          />
          <Image
            src={FastShop}
            width={isMobile ? '54' : '85'}
            height={isMobile ? '25' : '40'}
          />
          <Image
            src={Breton}
            width={isMobile ? '100' : '132'}
            height={isMobile ? '36' : '59'}
          />
          <Image
            src={Ornare}
            width={isMobile ? '88' : '131'}
            height={isMobile ? '44' : '80'}
          />
        </div>
      </div>
    </div>
  );
}
