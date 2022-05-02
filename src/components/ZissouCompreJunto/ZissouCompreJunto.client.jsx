import {Image, useProduct} from '@shopify/hydrogen/client';
import useMobile from '../../hooks/useMobile';

import useBuyTogether from '../../hooks/useBuyTogether';

import BaseCompreJunto from '../../assets/base_compre_junto.png';
import TravesseiroCompreJunto from '../../assets/travesseiro_compre_junto.png';
import LencolCompreJunto from '../../assets/lencol_compre_junto.png';

import * as styles from './ZissouCompreJunto.module.scss';

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

  const nameSelected = selectedVariant.title.split(' (')[0];
  const sizeSelected = selectedVariant.title.split(' (')[1].split(')')[0];

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
          title.includes('Coral') ? styles.OptionContainerCoral : null
        } ${includeBase ? styles.OptionContainerSelected : null}`}
        onClick={() => setIncludeBase((state) => !state)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={includeBase}
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
          />
          <span className={styles.SeeMore}>saiba mais</span>
        </div>
        <div className={styles.OptionInfo}>
          <span className={styles.OptionInfoTitle}>
            Adicione a <strong>base zissou</strong>
          </span>
          <strong className={styles.OptionInfoProductName}>
            {nameSelected}
          </strong>
          <span className={styles.OptionInfoMeasures}>({sizeSelected})</span>
        </div>
      </button>
      <button
        className={`${styles.OptionContainer} ${
          title.includes('Coral') ? styles.OptionContainerCoral : null
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
          title.includes('Coral') ? styles.OptionContainerCoral : null
        } ${includeLencol ? styles.OptionContainerSelected : null}`}
        onClick={() => setIncludeLencol((prev) => !prev)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={includeLencol}
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
          />
        </div>
        <div className={styles.OptionInfo}>
          <span className={styles.OptionInfoTitle}>
            Adicione o <strong>lençol zissou</strong>
          </span>
          <strong className={styles.OptionInfoProductName}>
            {nameSelected}
          </strong>
          <span className={styles.OptionInfoMeasures}>({sizeSelected})</span>
        </div>
      </button>
    </div>
  );
}
