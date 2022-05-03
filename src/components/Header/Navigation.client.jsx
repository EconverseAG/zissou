import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './header.module.scss';

import ColchaoCoral from '../../assets/menuItem__Coral.png';
import ColchaoBlue from '../../assets/menuItem__Blue.png';

/**
 * A client component that defines the navigation for a web storefront
 */
// Colocar de volta nos parâmetros depois {/*collections*/}
export default function Navigation() {
  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          {/* {collections.map((collection) => (
            <li key={collection.id}>
              <Link
                reloadDocument
                to={`/collections/${collection.handle}`}
                className="block p-4 hover:opacity-80"
              >
                {collection.title}
              </Link>
            </li>
          ))} */}
          <li>
            <Link reloadDocument to="/pages/colchoes-zissou">
              Colchões
            </Link>
            <ul className={styles.subMenu}>
              <li className={styles.coral}>
                <Link
                  reloadDocument
                  to="/products/colchao-zissou-coral-original"
                >
                  <Image src={ColchaoCoral} width="205" height="27" />
                </Link>
              </li>
              <li className={styles.blue}>
                <Link reloadDocument to="/products/colchao-zissou-blue">
                  <Image src={ColchaoBlue} width="205" height="27" />
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to="/pages/colchoes-zissou"
                  className={styles.descubra}
                >
                  Descubra os colchões
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to="/pages/comparativo-colchoes"
                  className={styles.compare}
                >
                  Compare os colchões
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.novo}>
            <Link reloadDocument to="/products/base-zissou">
              Base
            </Link>
          </li>
          <li>
            <Link reloadDocument to="/products/travesseiro-zissou">
              Travesseiro
            </Link>
          </li>
          <li>
            <Link reloadDocument to="/pages/lencol-e-duvet-zissou">
              Lençol & Duvet
            </Link>
            <ul className={styles.subMenu}>
              <li>
                <Link
                  reloadDocument
                  to="/products/jogo-de-lencol-zissou"
                  style={{textDecoration: 'underline'}}
                >
                  Lençol
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to="/products/duvet-zissou"
                  style={{textDecoration: 'underline'}}
                >
                  Duvet
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to="/pages/lencol-e-duvet-zissou"
                  className={styles.descubra}
                >
                  Descubra o lençol e duvet
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link reloadDocument to="/products/toca-zissou">Toca</Link>
          </li> */}
          <li>
            <Link reloadDocument to="/pages/bundles">
              Combos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
