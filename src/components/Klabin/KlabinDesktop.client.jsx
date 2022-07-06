import {Image} from '@shopify/hydrogen';

import * as styles from './Klabin.module.scss';
import parseUrl from '../../helpers/parseUrl';

const KlabinFundo = parseUrl('klabin_fundo.png');
import modalData from './ModalKlabinData';

import VideoUboxing from '../../assets/video_unbox.mp4';

import PopupContent from './Modal.client';

export default function KlabinDesktop() {
  return (
    <div className={styles.KlabinContainer}>
      <strong className={styles.KlabinTitle}>
        DURMA DE CONSCIÊNCIA TRANQUILA <br /> PORQUE{' '}
        <p className={styles.KlabinOtherColorTitle}>#AQUITEMKLABIN</p>
      </strong>
      <div className={styles.KlabinVideo}>
        <video
          className={styles.video}
          src={VideoUboxing}
          controls
          autoPlay
          loop
          muted
          width={756}
          height={435}
        />
      </div>
      <span className={styles.KlabinSubtitle}>
        Todos os produtos Zissou chegam na sua casa com embalagens de papelão{' '}
        <br />
        ondulado de altíssima qualidade da Klabin, referência no mundo em
        sustentabilidade
      </span>
      <div className={styles.KlabinImage}>
        <Image src={KlabinFundo} width="1200" height="473" />
        <div className={styles.KlabinDots}>
          {modalData.map((modal) => (
            <PopupContent content={modal} key={modal.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
