import {Image} from '@shopify/hydrogen';
import * as styles from './PotencializeSleep.module.scss';

import useMobile from '../../hooks/useMobile';
import parseUrl from '../../helpers/parseUrl';

const gif = parseUrl('potencialize-sleep.gif');

export default function PotencializeSleep() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <h2>
        Pensada para{' '}
        <strong>potencializar ao máximo a experiência de sono</strong> dos
        colchões Zissou
      </h2>
      <Image src={gif} width={1000} height={685} loading={'lazy'} />
    </div>
  );
}
