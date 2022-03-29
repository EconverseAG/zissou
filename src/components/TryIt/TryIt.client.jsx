import {Image, Link} from '@shopify/hydrogen';

import * as styles from './tryit.module.scss';

import Gif100Dias from '../../assets/gif_100dias.gif';

export default function TryIt() {
  return (
    <div className={styles.TryItContainer}>
      <div className={styles.TryItLeft}>
        <strong>
          EXPERIMENTE POR <br /> <p>100 DIAS</p> DO SEU JEITO
        </strong>
        <span>
          Se você não amar, é só nos avisar <br /> em até 100 dias e receber seu
          dinheiro de volta
          <br />
          <br />
          Simples assim, sem nenhuma complicação ;)
          <br />
          <br />
          Ah, e temos entrega expressa e <br /> frete grátis para todo o Brasil!
        </span>
        <Link to="https://www.zissou.com.br/pages/100dias">Saiba mais</Link>
      </div>
      <div className={styles.TryItRight}>
        <Image src={Gif100Dias} width="483" height="429" />
      </div>
    </div>
  );
}
