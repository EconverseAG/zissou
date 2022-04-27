import {Image} from '@shopify/hydrogen';

import useZissouProduct from '../../hooks/useZissouProduct';

import * as styles from './BagCustomization.module.scss';

import CustomBagTemplate from '../../assets/custom-bag-template.png';

function BagCustomization() {
  const {customBagText, setCustomBagText} = useZissouProduct();

  return (
    <div className={styles.customization}>
      <div className={styles.customizationImage}>
        <Image src={CustomBagTemplate} width={193} height={274} />
        <span className={customBagText.length > 5 ? styles.small : ''}>
          {customBagText}
        </span>
      </div>
      <div className={styles.customizationControl}>
        <textarea
          type="text"
          maxLength={10}
          placeholder="Escreva aqui&#10;(até 10 caracteres)"
          onChange={(e) => setCustomBagText(e.target.value)}
          value={customBagText}
        />
      </div>
    </div>
  );
}

export default BagCustomization;
