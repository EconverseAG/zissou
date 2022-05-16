import useMobile from '../../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './Combinacao.module.scss';

import CombinacaoImage from '../../../assets/combinacao.png';

export default function Combinacao() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.CombinacaoContainer}>
      <div className={styles.CombinacaoImage}>
        <Image
          src={CombinacaoImage}
          width={isMobile ? '304' : '653'}
          height={isMobile ? '43' : '93'}
        />
      </div>
      <span className={styles.CombinacaoText}>
        A combinação entre a resiliência do látex e o aconchego do viscoelástico
        resultam no{' '}
        <strong className={styles.CombinacaoBolder}>
          quilíbrio perfeito de sensações para uma noite de sono singular
        </strong>{' '}
        e aqueles 5 minutinhos de bônus merecidos
      </span>
    </div>
  );
}
