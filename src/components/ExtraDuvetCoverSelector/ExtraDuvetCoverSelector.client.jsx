import {Image} from '@shopify/hydrogen';

import ProductSelectedOptions from '../ProductSelectedOptions';

import useBuyTogether from '../../hooks/useBuyTogether';

import useMobile from '../../hooks/useMobile';

import * as styles from './ExtraDuvetCoverSelector.module.scss';

import GrayDuvet from '../../assets/duvet-cinza.png';
import WhiteDuvet from '../../assets/duvet-branca.png';

function ExtraDuvetCoverSelector({className, ...rest}) {
  const {
    includeGrayDuvetCover,
    includeWhiteDuvetCover,
    setIncludeGrayDuvetCover,
    setIncludeWhiteDuvetCover,
  } = useBuyTogether();

  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.extraCover} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      {...rest}
    >
      <label className={styles.extraCoverItem} htmlFor="gray-duvet-cover">
        <input
          type="checkbox"
          id="gray-duvet-cover"
          checked={includeGrayDuvetCover}
          onChange={() => setIncludeGrayDuvetCover(!includeGrayDuvetCover)}
        />
        <span className={styles.extraCoverItemCheckbox} />
        <Image src={GrayDuvet} width={177} height={74} />
        <div className={styles.extraCoverItemInfo}>
          <p>
            Adicione uma capa extra de Duvet branca e ganhe
            <br /> <strong>5% Off no combo</strong>
          </p>
          <ProductSelectedOptions className={styles.extraCoverItemInfoOption} />
        </div>
      </label>
      <label className={styles.extraCoverItem} htmlFor="white-duvet-cover">
        <input
          type="checkbox"
          id="white-duvet-cover"
          checked={includeWhiteDuvetCover}
          onChange={() => setIncludeWhiteDuvetCover(!includeWhiteDuvetCover)}
        />
        <span className={styles.extraCoverItemCheckbox} />
        <Image src={WhiteDuvet} width={177} height={74} />
        <div className={styles.extraCoverItemInfo}>
          <p>
            Adicione uma capa extra de Duvet cinza e ganhe
            <br /> <strong>5% Off no combo</strong>
          </p>
          <ProductSelectedOptions className={styles.extraCoverItemInfoOption} />
        </div>
      </label>
    </div>
  );
}

export default ExtraDuvetCoverSelector;
