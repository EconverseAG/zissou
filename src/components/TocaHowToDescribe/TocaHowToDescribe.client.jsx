import useMobile from '../../hooks/useMobile';

import VideoGif from '../../assets/toca_gif.gif';

import * as styles from './TocaHowToDescribe.module.scss';
import {Image} from '@shopify/hydrogen/client';

export default function TocaHowToDescribe() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.TocaHowToDescribeContainer}>
      <strong className={styles.TocaHowToDescribeContainerTitle}>
        <span className={styles.OtherColor}>Como descrever</span> a toca zissou?
      </strong>
      <div className={styles.Bottom}>
        <div className={styles.BottomVideo}>
          <Image
            src={VideoGif}
            width={isMobile ? 375 : 654}
            height={isMobile ? 340 : 438}
          />
        </div>
        <span className={styles.BottomText}>
          Direto na fonte
          <br />
          <br />
          Contratamos os melhores especialistas das universidades de Hauvard,
          Pischerstone e UNICÃOP para chegarmos na fórmula do sono perfeito
          <br />
          <br />E como nosso Colchão, a Toca Zissou também foi desenvolvida no
          Brasil e é produzida nos Estados Unidos
        </span>
      </div>
    </div>
  );
}
