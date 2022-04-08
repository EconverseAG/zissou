import {Image} from '@shopify/hydrogen';
import * as styles from './Legget.module.scss';

import SeloLegget from '../../../assets/selo-legget.png';

export default function Legget() {
  return (
    <div className={styles.LeggetContainer}>
      <div className={styles.LeggetImage}>
        <Image src={SeloLegget} width="224" height="175" />
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
