import {Link, Image} from '@shopify/hydrogen/client';
import parseUrl from '../../helpers/parseUrl';

import * as styles from './header.module.scss';

const ColchaoCoral = parseUrl('menuItem__Coral.png');
const ColchaoBlue = parseUrl('menuItem__Blue.png');
const ColchaoSpark = parseUrl('menuItem__Spark.png');

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation() {
  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.novo}>
            <Link to="/pages/colchoes-zissou">Colchões</Link>
            <ul className={styles.subMenu}>
              <li className={styles.coral}>
                <Link to="/products/colchao-zissou-coral-original">
                  <Image src={ColchaoCoral} width="205" height="27" />
                </Link>
              </li>
              <li className={styles.blue}>
                <Link to="/products/colchao-zissou-blue">
                  <Image src={ColchaoBlue} width="194" height="29" />
                </Link>
              </li>
              <li className={styles.spark}>
                <Link to="/products/colchao-zissou-spark">
                  <Image src={ColchaoSpark} width="205" height="27" />
                </Link>
              </li>
              <li>
                <Link to="/pages/colchoes-zissou" className={styles.descubra}>
                  Descubra os colchões
                </Link>
              </li>
              <li>
                <Link
                  to="/pages/comparativo-colchoes"
                  className={styles.compare}
                >
                  Compare os colchões
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/products/base-zissou">Base</Link>
          </li>
          <li>
            <Link to="/products/travesseiro-zissou">Travesseiro</Link>
          </li>
          <li>
            <Link to="/pages/lencol-e-duvet-zissou">Lençol & Duvet</Link>
            <ul className={styles.subMenu}>
              <li>
                <Link to="/products/jogo-de-lencol-zissou">Lençol</Link>
              </li>
              <li>
                <Link to="/products/duvet-enchimento-zissou">Duvet</Link>
              </li>
              <li>
                <Link
                  to="/pages/lencol-e-duvet-zissou"
                  className={styles.descubra}
                >
                  Descubra o lençol e duvet
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/products/toca-zissou">Toca</Link>
          </li>
          {/* <li>
            <Link to="/pages/bundles">Combos</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
