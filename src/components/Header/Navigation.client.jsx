import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './header.module.scss';

import ColchaoCoral from '../../assets/menuItem__Coral.png';
import ColchaoBlue from '../../assets/menuItem__Blue.png';
import ColchaoSpark from '../../assets/menuItem__Spark.png';

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
                <Link to="/products/colchao-zissou-coral-original-newurl">
                  <Image src={ColchaoCoral} width="205" height="27" />
                </Link>
              </li>
              <li className={styles.blue}>
                <Link to="/products/colchao-zissou-blue-newurl">
                  <Image src={ColchaoBlue} width="205" height="27" />
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
            <Link to="/products/travesseiro-zissou-newurl">Travesseiro</Link>
          </li>
          <li>
            <Link to="/pages/lencol-e-duvet-zissou">Lençol & Duvet</Link>
            <ul className={styles.subMenu}>
              <li>
                <Link to="/products/jogo-de-lencol-zissou">Lençol</Link>
              </li>
              <li>
                <Link to="/products/duvet-zissou">Duvet</Link>
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
