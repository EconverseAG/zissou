import {useState} from 'react';

import useMobile from '../../hooks/useMobile';

import * as styles from './TheSecret.module.scss';

import Panda from '../../assets/panda.mp4';

function TheSecret({productName, open}) {
  const [showSecret, setShowSecret] = useState(open);

  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      {!showSecret && (
        <div className={styles.theSecretHidden}>
          <div className={styles.theSecretHiddenActions}>
            <h2>O segredo</h2>
            <button onClick={() => setShowSecret(true)}>Saiba mais +</button>
          </div>
          <p>Descubra o segredo por trás do {productName}</p>
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
              O {productName} foi desenvolvido com tecido de polpa de bambu, que
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

export default TheSecret;
