import {useState} from 'react';

import {Image} from '@shopify/hydrogen';

import parseUrl from '../../../helpers/parseUrl';
import * as styles from './Faq.module.scss';

const Colchao = parseUrl('colchao_faq.png');

import Question1 from './Questions/Question1/Question1.client';
import Question2 from './Questions/Question2/Question2.client';
import Question3 from './Questions/Question3/Question3.client';
import Question4 from './Questions/Question4/Question4.client';
import Question5 from './Questions/Question5/Question5.client';
import Question6 from './Questions/Question6/Question6.client';

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.FaqContainer}>
      <strong className={styles.FaqTitle}>
        Escolhendo o seu colchão Zissou
      </strong>
      <div className={styles.FaqContent}>
        <div className={styles.FaqList}>
          <Question1 setIsOpen={setIsOpen} />
          <Question2 setIsOpen={setIsOpen} />
          <Question3 setIsOpen={setIsOpen} />
          <Question4 setIsOpen={setIsOpen} />
          <Question5 setIsOpen={setIsOpen} />
          <Question6 setIsOpen={setIsOpen} />
        </div>
        <div className={styles.FaqImage} style={{display: isOpen && 'none'}}>
          <Image src={Colchao} width="362" height="350" />
        </div>
      </div>
    </div>
  );
}
