import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './tryit.module.scss';

import Gif100Dias from '../../assets/gif_100dias.webm';

export default function TryItFor100Days({image, video}) {
  return (
    <div className={styles.TryItContainer}>
      <div className={styles.TryItLeft}>
        <strong>
          EXPERIMENTE POR <br /> <p>100 DIAS</p> DO SEU JEITO
        </strong>
        <span>
          Se você não amar, é só nos avisar <br /> em até <p>100 dias</p> e
          receber seu dinheiro de volta
          <br />
          <br />
          Simples assim, sem nenhuma complicação ;)
          <br />
          <br />
          Ah, e temos{' '}
          <p>
            entrega expressa e <br /> frete grátis para todo o Brasil!
          </p>
        </span>
        <Link to="/pages/100dias">Saiba mais</Link>
      </div>
      <div className={styles.TryItRight}>
        <Link to="/pages/100dias">
          {video && (
            <video
              src={video ? video : Gif100Dias}
              autoPlay
              loop
              muted
              width={574}
              height={510}
            />
          )}
          {image && <Image src={image} width={574} height={510} />}
        </Link>
      </div>
    </div>
  );
}
