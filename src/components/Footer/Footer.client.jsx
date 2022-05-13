import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './footer.module.scss';

import WhatsAppMenu from '../../assets/icone-menu-whatsapp-white.webp';
import IconInstagram from '../../assets/icone-menu-instagram-white.webp';
import IconFacebook from '../../assets/icone-menu-facebook-white.webp';
import IconYoutube from '../../assets/icone-menu-youtube-white.webp';
import IconTwitter from '../../assets/icone-menu-twitter-white.webp';
import IconZissou from '../../assets/logo-zissou-white.webp';
import IconSecure from '../../assets/shopifySecure.webp';
import IconPayment from '../../assets/shopifyPayments.webp';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer() {
  return (
    <footer className={styles.footerContainer} role="contentinfo">
      {/* <styles.StyleTag /> */}
      <div className={styles.footerContentTop}>
        <div>
          <strong>Produtos</strong>
          <ul>
            <li>
              <Link to="/pages/colchoes-zissou">Colchões</Link>
            </li>
            <li>
              <Link to="/products/travesseiro-zissou">Travesseiro Zissou</Link>
            </li>
            <li>
              <Link to="/pages/lencol-e-duvet-zissou">
                Lençol & Duvet Zissou
              </Link>
            </li>
            {/* <li>
                <Link  to="/products/toca-zissou">
                  Toca Zissou
                </Link>
              </li> */}
            <li>
              <Link to="/products/base-zissou">Base Zissou</Link>
            </li>
            <li>
              <Link to="/pages/bundles">Combos</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong>Atendimento</strong>
          <ul>
            <li>
              <Link to="https://api.whatsapp.com/send?phone=5511932858213">
                <Image src={WhatsAppMenu} width="19" height="19" />
                (11) 93285-8213
              </Link>
            </li>
            <li>
              <Link to="mailto:falecom@zissou.com.br">Email</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong>Zissou</strong>
          <ul>
            <li>
              <Link to="/pages/casa-zissou">Lojas</Link>
            </li>
            <li>
              <Link to="/blogs/midia">Zissou na mídia</Link>
            </li>
            <li>
              <Link to="/blogs/redefinaseusono">Blog</Link>
            </li>
            <li>
              <Link to="/policies/privacy-policy">Aviso de privacidade</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong>Redes Sociais</strong>
          <ul>
            <li>
              <Link to="https://www.facebook.com/zissoubr/">
                <Image
                  src={IconFacebook}
                  width="18"
                  height="18"
                  style={{maxHeight: '18px'}}
                />
              </Link>
              <Link to="https://www.instagram.com/zissoubr/">
                <Image src={IconInstagram} width="20" height="21" />
              </Link>
              <Link to="https://www.youtube.com/channel/UC4KaCTzQznWLq51ci6CFdYQ">
                <Image src={IconYoutube} width="24" height="19" />
              </Link>
              <Link to="https://twitter.com/zissoubr">
                <Image src={IconTwitter} width="25" height="25" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Image src={IconZissou} width="130" height="35" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerContentBottom}>
        <div className={styles.footerLeft}>
          <div>
            Site Seguro
            <Image src={IconSecure} width="51" height="20" />
          </div>
          <div>
            Pagamento
            <Image src={IconPayment} width="149" height="20" />
          </div>
        </div>
        <div className={styles.footerRight}>
          ZISSOU ASSESSORIA E CONSULTORIA EM ARTIGOS DO SONO S.A. | CNPJ:
          24.878.066/000147 <br />
          R. DR. MELO ALVES, 383 - CERQUEIRA CÉSAR, SÃO PAULO - SP, 01417-010
        </div>
      </div>
    </footer>
  );
}
