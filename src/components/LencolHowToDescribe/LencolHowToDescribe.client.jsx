import {Image} from '@shopify/hydrogen';

import useMobile from '../../hooks/useMobile';

import * as styles from './LencolHowToDescribe.module.scss';
import useQuote from '../../hooks/useQuote';

function LencolHowToDescribe() {
  const {phrase, author, quoteImage} = useQuote();

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
            <p>{phrase}</p>
            <span>{author}</span>
          </div>
        </div>
        <div className={styles.contentImages}>
          {quoteImage && (
            <Image
              src={quoteImage}
              width={isMobile ? 985 : 660}
              height={isMobile ? 375 : 340}
              loading={'lazy'}
            />
          )}
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
