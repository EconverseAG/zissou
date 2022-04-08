import {Image} from '@shopify/hydrogen';
import * as styles from './Faq.module.scss';

import Colchao from '../../../assets/colchao_faq.png';

import Question1 from './Questions/Question1/Question1';
import Question2 from './Questions/Question2/Question2';

export default function Faq() {
  return (
    <div className={styles.FaqContainer}>
      <strong className={styles.FaqTitle}>
        Escolhendo o seu colchão Zissou
      </strong>
      <div className={styles.FaqContent}>
        <div className={styles.FaqList}>
          <Question1 />
          <Question2 />
        </div>
        <div className={styles.FaqImage}>
          <Image src={Colchao} width="362" height="350" />
        </div>
      </div>
    </div>
  );
}
