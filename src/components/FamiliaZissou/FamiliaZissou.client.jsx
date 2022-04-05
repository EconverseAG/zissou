import {Image} from '@shopify/hydrogen';
import * as styles from './FamiliaZissou.module.scss';

import FamiliaZissouFundo from '../../assets/familiaZissouFUndo.png';
import FamiliaZissouFundoMobile from '../../assets/familiaZissouFundoMobile.png';

import PopupContent from './FamiliaModal.client';
import modalData from './ModalFamiliaZissouData';

import useMobile from '../../hooks/useMobile';

export default function FamiliaZissou() {
  const {isMobile} = useMobile();
  return (
    <div className={styles.FamiliaZissouContainer}>
      <strong className={styles.FamiliaZissouTitle}>A FAMILIA ZISSOU</strong>
      <span className={styles.FamiliaZissouSubtitle}>
        Todos os produtos com entrega expressa e frete grátis direto para a sua
        casa
      </span>
      <div className={styles.FamiliaZissouImage}>
        {isMobile ? (
          <Image src={FamiliaZissouFundoMobile} width="335" height="150" />
        ) : (
          <Image src={FamiliaZissouFundo} width="1103" height="491" />
        )}
        {modalData.map((modal) => (
          <PopupContent content={modal} key={modal.name} />
        ))}
      </div>
    </div>
  );
}
