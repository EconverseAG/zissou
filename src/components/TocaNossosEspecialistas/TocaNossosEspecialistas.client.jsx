import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './TocaNossosEspecialistas.module.scss';

import Slider from 'react-slick/lib/slider';
import parseUrl from '../../helpers/parseUrl';
const NossosEspecialistasImage = parseUrl('toca-nossos-especialistas.webp');

const Especialista1 = parseUrl('especialista-1.webp');
const Especialista2 = parseUrl('especialista-2.webp');
const Especialista3 = parseUrl('especialista-3.webp');

export default function TocaNossosEspecialistas() {
  const {isMobile} = useMobile();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  return (
    <div className={styles.TocaNossosEspecialistasContainer}>
      <strong>NOSSOS ESPECIALISTAS</strong>
      {!isMobile && (
        <Image src={NossosEspecialistasImage} width={1660} height={822} />
      )}
      {isMobile && (
        <Slider {...settings}>
          <Image src={Especialista1} width={323} height={428} />
          <Image src={Especialista2} width={323} height={428} />
          <Image src={Especialista3} width={323} height={428} />
        </Slider>
      )}
    </div>
  );
}
