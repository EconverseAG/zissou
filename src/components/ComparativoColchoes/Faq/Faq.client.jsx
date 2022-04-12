import {Image} from '@shopify/hydrogen';
import * as styles from './Faq.module.scss';

import Colchao from '../../../assets/colchao_faq.png';

import Question1 from './Questions/Question1/Question1';
import Question2 from './Questions/Question2/Question2';
import Question3 from './Questions/Question3/Question3';
import Question4 from './Questions/Question4/Question4';
import Question5 from './Questions/Question5/Question5';
import Question6 from './Questions/Question6/Question6';

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
          <Question3 />
          <Question4 />
          <Question5 />
          <Question6 />
        </div>
        <div className={styles.FaqImage}>
          <Image src={Colchao} width="362" height="350" />
        </div>
      </div>
    </div>
  );
}
