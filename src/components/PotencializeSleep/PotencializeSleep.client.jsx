import {Image} from '@shopify/hydrogen';
import * as styles from './PotencializeSleep.module.scss';

import gif from '../../assets/potencialize-sleep.gif';

export default function PotencializeSleep() {
  return (
    <div className={styles.wrapper}>
      <h2>
        Pensada para{' '}
        <strong>potencializar ao máximo a experiência de sono</strong> dos
        colchões Zissou
      </h2>
      <Image src={gif} width={1000} height={685} />
    </div>
  );
}
