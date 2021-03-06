import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';
import * as styles from './Legget.module.scss';
import parseUrl from '../../../helpers/parseUrl';

const SeloLegget = parseUrl('selo-legget.png');

export default function Legget() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.LeggetContainer}>
      <div className={styles.LeggetImage}>
        <Image
          src={SeloLegget}
          width={isMobile ? '172' : '224'}
          height={isMobile ? '134' : '175'}
        />
      </div>
      <span className={styles.LeggetTitle}>
        A Leggett & Platt, fabricante das melhores molas do mercado global
        produz com exclusividade os colchões da Zissou no Brasil. Cada modelo de
        colchão com suporte híbrido Leggett & Platt utiliza uma tecnologia
        diferente, aumentando o frescor e a adaptabilidade às curvas do corpo e
        melhorando a ergonomia
      </span>
    </div>
  );
}
