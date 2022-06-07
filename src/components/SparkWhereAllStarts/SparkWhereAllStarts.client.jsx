import {Image} from '@shopify/hydrogen/client';

import SparkLogoWhite from '../../assets/spark-logo-white.svg';
import useMobile from '../../hooks/useMobile';

import * as styles from './SparkWhereAllStarts.module.scss';

function SparkWhereAllStarts() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
      <h2>Onde tudo começa</h2>
      <p>
        Conversas pelo telefone no escurinho, que vão madrugada a dentro e
        aumentam a vontade de estar perto
        <br />
        <br />
        Domingos preguiçosos planejando o futuro ao som do disco preferido
        <br />
        <br />
        A primeira noite dormindo abraçado na primeira cama da primeira casa
        <br />
        <br />
        Tardes de chuva embaixo da coberta com filme e pipoca
        <br />
        <br />
        Cochilos preciosos nos intervalos do chorinho de neném na madrugada
        <br />
        <br />
        Um momento a-ha que nos coloca em movimento
        <br />
        <br />
        Sonhar e realizar é possível e tudo começa com um soninho gostoso
      </p>
      <div className={styles.footer}>
        <span>No seu</span>
        <Image
          src={SparkLogoWhite}
          width={isMobile ? 284 : 302}
          height={isMobile ? 92 : 98}
        />
      </div>
    </div>
  );
}

export default SparkWhereAllStarts;
