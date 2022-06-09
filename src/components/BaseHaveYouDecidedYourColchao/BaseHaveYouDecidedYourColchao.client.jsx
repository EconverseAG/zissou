import {Link} from '@shopify/hydrogen/client';

import * as styles from './BaseHaveYouDecidedYourColchao.module.scss';
import useMobile from '../../hooks/useMobile';

export default function BaseHaveYouDecidedYourColchao() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.content}>
        <h2>Já decidiu seu colchão?</h2>
        <Link to="/pages/comparativo-colchoes">Spark, Coral ou blue</Link>
      </div>
    </div>
  );
}
