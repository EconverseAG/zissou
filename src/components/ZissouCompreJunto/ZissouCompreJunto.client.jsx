import useMobile from '../../hooks/useMobile';
import {Image, useProduct} from '@shopify/hydrogen/client';

import BaseCompreJunto from '../../assets/base_compre_junto.png';
import TravesseiroCompreJunto from '../../assets/travesseiro_compre_junto.png';
import LencolCompreJunto from '../../assets/lencol_compre_junto.png';

import * as styles from './ZissouCompreJunto.module.scss';

export default function ZissouCompreJunto({
  selectedBase,
  setSelectedBase,
  selectedLencol,
  setSelectedLencol,
  selectedTravesseiro,
  setSelectedTravesseiro,
}) {
  const {isMobile} = useMobile();
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
        } ${selectedBase ? styles.OptionContainerSelected : null}`}
        onClick={() => setSelectedBase((prev) => !prev)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={selectedBase}
        />
        <span
          className={`${styles.OptionSelect}  ${
            selectedBase ? styles.active : null
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
        } ${selectedTravesseiro ? styles.OptionContainerSelected : null}`}
        onClick={() => setSelectedTravesseiro((prev) => !prev)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={selectedTravesseiro}
        />
        <span
          className={`${styles.OptionSelect}  ${
            selectedTravesseiro ? styles.active : null
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
        } ${selectedLencol ? styles.OptionContainerSelected : null}`}
        onClick={() => setSelectedLencol((prev) => !prev)}
      >
        <input
          type="checkbox"
          id="base-zissou-compre-junto"
          name="base-zissou-compre-junto"
          checked={selectedLencol}
        />
        <span
          className={`${styles.OptionSelect}  ${
            selectedLencol ? styles.active : null
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
