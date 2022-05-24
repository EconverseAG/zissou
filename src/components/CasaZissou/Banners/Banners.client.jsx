import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';
import Slider from 'react-slick/lib/slider';

import * as styles from './banners.module.scss';

import Banner1 from '../../../assets/slick-lojas-1.png';
import Banner2 from '../../../assets/slick-lojas-2.png';
import Banner3 from '../../../assets/slick-lojas-3.png';
import Banner4 from '../../../assets/slick-lojas-4.png';
import Banner5 from '../../../assets/slick-lojas-5.png';
import Banner6 from '../../../assets/slick-lojas-6.png';

import MobileBanner1 from '../../../assets/slick_lojas_mobile_1.webp';
import MobileBanner2 from '../../../assets/slick_lojas_mobile_2.webp';
import MobileBanner3 from '../../../assets/slick_lojas_mobile_3.webp';
import MobileBanner4 from '../../../assets/slick_lojas_mobile_4.webp';
import MobileBanner5 from '../../../assets/slick_lojas_mobile_5.webp';
import MobileBanner6 from '../../../assets/slick_lojas_mobile_6.webp';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 68);

export default function Banners({refScroll}) {
  const {isMobile} = useMobile();

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const executeScroll = () => scrollToRef(refScroll);

  return (
    <div className={styles.bannersContainer}>
      <div className={styles.bannersText}>
        <strong className={styles.bannersTitle}>Experiência Zissou</strong>
        <span className={styles.bannersSubtitle}>Conheça nossas lojas</span>
      </div>
      <Slider {...settings}>
        <div className={styles.banner}>
          <Image
            src={!isMobile ? Banner1 : MobileBanner1}
            width={!isMobile ? '1980' : '100%'}
            height={!isMobile ? '650' : '100%'}
          />
        </div>
        <div className={styles.banner}>
          <Image
            src={!isMobile ? Banner2 : MobileBanner2}
            width={!isMobile ? '1980' : '100%'}
            height={!isMobile ? '650' : '100%'}
          />
        </div>
        <div className={styles.banner}>
          <Image
            src={!isMobile ? Banner3 : MobileBanner3}
            width={!isMobile ? '1980' : '100%'}
            height={!isMobile ? '650' : '100%'}
          />
        </div>
        <div className={styles.banner}>
          <Image
            src={!isMobile ? Banner4 : MobileBanner4}
            width={!isMobile ? '1980' : '100%'}
            height={!isMobile ? '650' : '100%'}
          />
        </div>
        <div className={styles.banner}>
          <Image
            src={!isMobile ? Banner5 : MobileBanner5}
            width={!isMobile ? '1980' : '100%'}
            height={!isMobile ? '650' : '100%'}
          />
        </div>
        <div className={styles.banner}>
          <Image
            src={!isMobile ? Banner6 : MobileBanner6}
            width={!isMobile ? '1980' : '100%'}
            height={!isMobile ? '650' : '100%'}
          />
        </div>
      </Slider>
      <button className={styles.arrowDown} onClick={executeScroll}>
        <ArrowDown />
      </button>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={102.827}
      height={34.544}
      viewBox="0 0 102.827 34.544"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Ret\xE2ngulo_160"
            data-name="Ret\xE2ngulo 160"
            width={102.827}
            height={34.544}
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Grupo_101" data-name="Grupo 101" transform="translate(0 0)">
        <g
          id="Grupo_100"
          data-name="Grupo 100"
          transform="translate(0 0)"
          clipPath="url(#clip-path)"
        >
          <path
            id="Caminho_362"
            data-name="Caminho 362"
            d="M.841,3.434,17.7,13.9,44.386,30.479l6.145,3.816a1.69,1.69,0,0,0,1.766,0l16.859-10.47L95.843,7.25l6.144-3.816c1.936-1.2.177-4.371-1.766-3.164L83.363,10.74,56.675,27.314,50.531,31.13H52.3L35.438,20.66,8.751,4.085,2.607.27C.666-.937-1.1,2.23.841,3.434"
            transform="translate(0 0)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}
