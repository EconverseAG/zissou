import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './SleepAndLive.module.scss';

import ColchaoCoral from '../../assets/colchao_coral.png';
import ColchaoBlue from '../../assets/colchao_blue.png';

export default function SleepAndLive() {
  return (
    <div className={styles.SleepAndLiveContainer}>
      <span>Dormir & Viver</span>
      <div className={styles.SleepAndLiveContent}>
        <div>
          <p>
            Mais <br /> vendido
          </p>
          <strong>Coral</strong>
          <span>A evolução do sono</span>
          <Link reloadDocument to="/products/colchao-zissou-coral-original">
            <Image src={ColchaoCoral} width="334" height="119" />
          </Link>
          <Link reloadDocument to="/products/colchao-zissou-coral-original">
            Colchão Zissou Coral
          </Link>
        </div>
        <div>
          <p>
            Mais <br /> avançado
          </p>
          <strong>Blue</strong>
          <span>Liberte seus sonhos</span>
          <Link reloadDocument to="/products/colchao-zissou-blue">
            <Image src={ColchaoBlue} width="334" height="119" />
          </Link>
          <Link reloadDocument to="/products/colchao-zissou-blue">
            Colchão Zissou Blue
          </Link>
        </div>
      </div>
    </div>
  );
}
