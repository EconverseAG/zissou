import {useState} from 'react';

import useMobile from '../../hooks/useMobile';

import * as styles from './LencolTheSecret.module.scss';

import Panda from '../../assets/panda.mp4';

function LencolTheSecret() {
  const [showSecret, setShowSecret] = useState(false);

  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      {!showSecret && (
        <div className={styles.theSecretHidden}>
          <div className={styles.theSecretHiddenActions}>
            <h2>O segredo</h2>
            <button onClick={() => setShowSecret(true)}>Saiba mais +</button>
          </div>
          <p>Descubra o segredo por trás do Lençol Zissou</p>
        </div>
      )}
      {showSecret && (
        <div className={styles.theSecretRevealed}>
          <h2>O segredo</h2>
          <div className={styles.theSecretRevealedContent}>
            <video
              className={styles.video}
              src={Panda}
              autoPlay
              loop
              muted
              playsInline
            />
            <p>
              O Lençol Zissou foi desenvolvido com tecido de polpa de bambu, que
              potencializa seu frescor. Possui alta durabilidade e propriedades
              naturais absorventes, antibacterianas e desodorizantes. Resumindo,
              confere um dos toques mais macios, suaves e acetinados do mundo.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LencolTheSecret;
