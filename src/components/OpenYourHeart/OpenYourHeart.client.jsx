import {Link, Image} from '@shopify/hydrogen/client';
import * as styles from './OpenYourHeart.module.scss';
import parseUrl from '../../helpers/parseUrl';

const Gif = parseUrl('GIF-ABRA-SEU-CORACAO.gif');
const Whatsapp = parseUrl('icone-menu-whatsapp-white.webp');

import useMobile from '../../hooks/useMobile';

export default function OpenYourHeart() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.OpenContainer}>
      <strong>
        ABRA SEU <p>CORAÇÃO</p>
      </strong>
      <span>
        Sabemos que o seu sono é especial! <br /> Conte com o nosso time para
        uma experiência mais personalizada
      </span>
      <div>
        <Link
          to="https://api.whatsapp.com/send?phone=5511932858213"
          target="_blank"
        >
          <div className={styles.OpenLeft}>
            {/* <video src={Gif} autoPlay loop muted /> */}
            <Image src={Gif} width={692} height={380} />
          </div>
        </Link>
        <Link
          to="https://api.whatsapp.com/send?phone=5511932858213"
          target="_blank"
        >
          <div className={styles.OpenRight}>
            <span>
              SEJA LÁ QUAL FOR SUA DÚVIDA, DESABAFO OU ELOGIOS, É SÓ NOS CHAMAR
              POR AQUI ;)
            </span>
            <div>
              <Image
                src={Whatsapp}
                width={isMobile ? '31' : '43'}
                height={isMobile ? '29' : '43'}
                loading={'lazy'}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
