import useMobile from '../../hooks/useMobile';

import * as styles from './LencolHowToDescribe.module.scss';

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
