import {useState} from 'react';
import {Image} from '@shopify/hydrogen';

import * as styles from './BagCustomization.module.scss';

import CustomBagTemplate from '../../assets/custom-bag-template.png';

function BagCustomization() {
  const [customText, setCustomText] = useState('');
  return (
    <div className={styles.customization}>
      <div className={styles.customizationImage}>
        <Image src={CustomBagTemplate} width={193} height={274} />
        <span className={customText.length > 5 ? styles.small : ''}>
          {customText}
        </span>
      </div>
      <div className={styles.customizationControl}>
        <textarea
          type="text"
          maxLength={10}
          placeholder="Escreva aqui&#10;(até 10 caracteres)"
          onChange={(e) => setCustomText(e.target.value)}
          value={customText}
        />
      </div>
    </div>
  );
}

export default BagCustomization;
