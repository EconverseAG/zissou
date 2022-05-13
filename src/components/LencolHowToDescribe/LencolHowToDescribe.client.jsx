import {Image} from '@shopify/hydrogen';

import useMobile from '../../hooks/useMobile';

import * as styles from './LencolHowToDescribe.module.scss';

import Illustration1 from '../../assets/lencol-how-to-describe-1.png';

function LencolHowToDescribe() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <h2>
        Como descrever <strong>o lençol Zissou?</strong>
      </h2>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>
            A sensação é tão absurda que não temos palavras para apresentá-lo
            para você.
            <br />
            <br />
            Criamos um dream team de pessoas de diferentes universos para
            testá-lo em primeira mão. Confira as reações
          </p>
          <div className={styles.quote}>
            <p>É como dormir nas nuvens</p>
            <span>Hércules H. (São Paulo)</span>
          </div>
        </div>
        <div className={styles.contentImages}>
          <Image
            src={Illustration1}
            width={isMobile ? 684 : 458}
            height={isMobile ? 375 : 458}
            loading={'lazy'}
          />
          {!isMobile && (
            <span>
              Ou Seja, <strong>UAU!</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LencolHowToDescribe;
