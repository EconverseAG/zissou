import {Image} from '@shopify/hydrogen';
import parseUrl from '../../helpers/parseUrl';

const CapaFechada = parseUrl('capa-fechada.webp');
const Protecao = parseUrl('protecao.webp');
const Conforto = parseUrl('conforto.webp');
const Abraco = parseUrl('abraco.webp');

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
            width={isMobile ? 425 : 550}
            height={isMobile ? 233 : 303}
          />
        </div>
        <div>
          <Image
            src={Protecao}
            width={isMobile ? 425 : 550}
            height={isMobile ? 233 : 303}
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
            width={isMobile ? 425 : 550}
            height={isMobile ? 233 : 303}
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
            width={isMobile ? 425 : 550}
            height={isMobile ? 233 : 303}
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
