import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './TocaNossosEspecialistas.module.scss';

import NossosEspecialistasImage from '../../assets/toca-nossos-especialistas.webp';
import Slider from 'react-slick/lib/slider';

import Especialista1 from '../../assets/especialista-1.webp';
import Especialista2 from '../../assets/especialista-2.webp';
import Especialista3 from '../../assets/especialista-3.webp';

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
