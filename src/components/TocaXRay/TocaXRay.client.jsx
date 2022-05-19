import {Image} from '@shopify/hydrogen';

import CapaFechada from '../../assets/capa-fechada.webp';
import Protecao from '../../assets/protecao.webp';
import Conforto from '../../assets/conforto.webp';
import Abraco from '../../assets/abraco.webp';

import * as styles from './TocaXRay.module.scss';
import useMobile from '../../hooks/useMobile';

export default function TocaXRay() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.TocaXRayContainer}>
      <strong className={styles.TocaXRayTitle}>
        Raio X <span className={styles.OtherColor}>da toca Zissou</span>
      </strong>
      <div className={styles.TocaXRayContent}>
        <div>
          <Image
            src={CapaFechada}
            width={isMobile ? 425 : 869}
            height={isMobile ? 233 : 479}
          />
        </div>
        <div>
          <Image
            src={Protecao}
            width={isMobile ? 425 : 869}
            height={isMobile ? 233 : 479}
          />
          <span className={styles.Flag}>PROTEÇÃO</span>
          <span className={styles.Text}>
            DUVET | O Duvet dupla face é o refúgio que seu cachorro precisa para
            pegar no sono, oferecendo abrigo dentro da Toca Zissou
          </span>
        </div>
        <div>
          <Image
            src={Conforto}
            width={isMobile ? 425 : 869}
            height={isMobile ? 233 : 479}
          />
          <span className={styles.Flag}>CONFORTO</span>
          <span className={styles.Text}>
            COLCHÃO | O Colchão se molda à forma única de seu cachorro
            minimizando pontos de pressão, tornando a experiência muito mais
            aconchegante, auuuuuuuuuuuuuu
          </span>
        </div>
        <div>
          <Image
            src={Abraco}
            width={isMobile ? 425 : 869}
            height={isMobile ? 233 : 479}
          />
          <span className={styles.Flag}>ABRACO</span>
          <span className={styles.Text}>
            CAMA | A Cama tem um formato que contorna o corpo do seu cachorro
            para que ele fique encolhidinho e acolhido
          </span>
        </div>
      </div>
    </div>
  );
}
