import {Image, useProduct} from '@shopify/hydrogen/client';
import useMobile from '../../hooks/useMobile';

import useBuyTogether from '../../hooks/useBuyTogether';

import BaseCompreJunto from '../../assets/base_compre_junto.png';
import TravesseiroCompreJunto from '../../assets/travesseiro_compre_junto.png';
import LencolCompreJunto from '../../assets/lencol_compre_junto.png';

import * as styles from './ZissouCompreJunto.module.scss';
import useZissouProduct from '../../hooks/useZissouProduct';

export default function ZissouCompreJunto() {
  const {isMobile} = useMobile();

  const {
    includeBase,
    includeLencol,
    includeTwoWashableTravesseiros,
    setIncludeBase,
    setIncludeLencol,
    setIncludeTwoWashableTravesseiros,
  } = useBuyTogether();

  const {selectedVariant, title} = useProduct();
  const {isSpark} = useZissouProduct();

  const nameSelected =
    selectedVariant.title.split(' (')[0] || selectedVariant.title;

  return (
    <div className={styles.ZissouCompreJuntoContainer}>
      <span className={styles.CompreJuntoTitle}>
        <strong className={styles.Bolder}>
          COMPLETE SUA EXPERIÊNCIA DE SONO
        </strong>{' '}
        <br /> QUANTO MAIS PRODUTOS, MAIS VOCÊ ECONOMIZA
      </span>
      <button
        className={`${styles.OptionContainer} ${
          title.includes('Coral')
            ? styles.OptionContainerCoral
            : isSpark
            ? styles.OptionContainerSpark
            : ''
        } ${includeBase ? styles.OptionContainerSelected : null}`}
        onClick={() => setIncludeBase((state) => !state)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={includeBase}
          readOnly
        />
        <span
          className={`${styles.OptionSelect}  ${
            includeBase ? styles.active : null
          }`}
        ></span>
        <div className={styles.OptionImage}>
          <Image
            src={BaseCompreJunto}
            width={isMobile ? 84 : 148}
            height={isMobile ? 35 : 63}
            loading={'lazy'}
          />
        </div>
        <div className={styles.OptionInfo}>
          <span className={styles.OptionInfoTitle}>
            Adicione a <strong>base zissou</strong>
          </span>
          <strong className={styles.OptionInfoProductName}>
            {nameSelected}
          </strong>
        </div>
      </button>
      <button
        className={`${styles.OptionContainer} ${
          title.includes('Coral')
            ? styles.OptionContainerCoral
            : isSpark
            ? styles.OptionContainerSpark
            : ''
        } ${
          includeTwoWashableTravesseiros ? styles.OptionContainerSelected : null
        }`}
        onClick={() => setIncludeTwoWashableTravesseiros((state) => !state)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={includeTwoWashableTravesseiros}
          readOnly
        />
        <span
          className={`${styles.OptionSelect}  ${
            includeTwoWashableTravesseiros ? styles.active : null
          }`}
        ></span>
        <div className={styles.OptionImage}>
          <Image
            src={TravesseiroCompreJunto}
            width={isMobile ? 90 : 144}
            height={isMobile ? 47 : 75}
            loading={'lazy'}
          />
        </div>
        <div className={styles.OptionInfo}>
          <span className={styles.OptionInfoTitle}>
            Adicione <strong>2 travesseiros laváveis zissou</strong>
          </span>
        </div>
      </button>
      <button
        className={`${styles.OptionContainer} ${
          title.includes('Coral')
            ? styles.OptionContainerCoral
            : isSpark
            ? styles.OptionContainerSpark
            : ''
        } ${includeLencol ? styles.OptionContainerSelected : null}`}
        onClick={() => setIncludeLencol((prev) => !prev)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={includeLencol}
          readOnly
        />
        <span
          className={`${styles.OptionSelect}  ${
            includeLencol ? styles.active : null
          }`}
        ></span>
        <div className={styles.OptionImage}>
          <Image
            src={LencolCompreJunto}
            width={isMobile ? 80 : 142}
            height={isMobile ? 37 : 65}
            loading={'lazy'}
          />
        </div>
        <div className={styles.OptionInfo}>
          <span className={styles.OptionInfoTitle}>
            Adicione o <strong>lençol zissou</strong>
          </span>
          <strong className={styles.OptionInfoProductName}>
            {nameSelected}
          </strong>
        </div>
      </button>
    </div>
  );
}
