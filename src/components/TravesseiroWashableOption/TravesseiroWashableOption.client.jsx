import {Image} from '@shopify/hydrogen';

import * as styles from './TravesseiroWashableOption.module.scss';

import useMobile from '../../hooks/useMobile';

import TravesseiroWashable from '../../assets/travesseiro-washable.png';
import TravesseiroWashableMobile from '../../assets/travesseiro-washable-mobile.png';

export default function TravesseiroWashableOption() {
  const {isMobile} = useMobile();

  return (
    <div
      className={`flex flex-col items-center ${styles.wrapper} ${
        isMobile ? styles.mobile : ''
      }`}
    >
      <div className={styles.wrapperTop}>
        <h2>Opção lavável</h2>
        <span className={styles.firstText}>
          Adicionando essa opção, a higienização do Travesseiro Zissou fica mais
          fácil.
          <br /> A capa agora pode ser lavada pelos seguintes diferenciais:
        </span>
      </div>
      <div className={styles.wrapperBottom}>
        <div className={styles.wrapperImage}>
          <span className={`${styles.tip} ${styles.tipLeft}`}>
            Capa lavável de algodão 300 fios com compartimentos internos e zíper
            invisível
          </span>

          <span className={`${styles.tip} ${styles.tipRight}`}>
            Enchimentos de fibra siliconizada que devem ser removidos antes de
            lavar a capa
          </span>

          <Image
            src={isMobile ? TravesseiroWashableMobile : TravesseiroWashable}
            width={isMobile ? 428 : 1610}
            height={isMobile ? 288 : 762}
            loading={'lazy'}
          />
        </div>

        <span className={styles.reminderText}>
          Ah! Lembrando que apenas a capa pode ir para o banho. As camadas e
          enchimentos não devem ser lavados ;)
        </span>
      </div>
    </div>
  );
}
