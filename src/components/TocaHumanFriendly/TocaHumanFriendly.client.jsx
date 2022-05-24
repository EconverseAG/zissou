import Slider from 'react-slick/lib/slider';
import {Image} from '@shopify/hydrogen';

import HumanFriendly1 from '../../assets/human-friendly-1.webp';
import HumanFriendly2 from '../../assets/human-friendly-2.webp';
import HumanFriendly3 from '../../assets/human-friendly-3.webp';
import HumanFriendly4 from '../../assets/human-friendly-4.webp';

import * as styles from './TocaHumanFriendly.module.scss';

export default function TocaHumanFriendly() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  return (
    <div className={styles.TocaHumanFriendlyContainer}>
      <div className={styles.Left}>
        <strong className={styles.Title}>
          <span className={styles.OtherColor}>Human-</span>Friendly
        </strong>
        <span className={styles.Text}>
          Sim, nós também pensamos em vocês humanos
        </span>

        <strong className={styles.Subtitle}>Super portátil!</strong>
        <span className={styles.Text}>
          Desenvolvemos uma alça especial na Toca Zissou, que permite levá-la
          para qualquer canto, e ainda tem espaço para carregar os itens
          essenciais e indispensáveis do seu amiguinho
        </span>

        <strong className={styles.Subtitle}>Sempre limpinho!</strong>
        <span className={styles.Text}>
          Todos os tecidos das 3 partes da Toca são removíveis e laváveis, e a
          parte interna possui uma proteção impermeável
        </span>
      </div>
      <div className={styles.Right}>
        <Slider {...settings}>
          <Image src={HumanFriendly1} width={450} height={498} />
          <Image src={HumanFriendly2} width={450} height={498} />
          <Image src={HumanFriendly3} width={450} height={498} />
          <Image src={HumanFriendly4} width={450} height={498} />
        </Slider>
      </div>
    </div>
  );
}
