import {useCallback, useState} from 'react';
import {Image} from '@shopify/hydrogen';

import useZissouProduct from '../../hooks/useZissouProduct';

import * as styles from './BagCustomization.module.scss';

import CustomBagTemplate from '../../assets/custom-bag-template.png';

import SeloInfinito from '../../assets/selo-infinito.png';
import SeloTrevo from '../../assets/selo-trevo.png';
import SeloPata from '../../assets/selo-pata.png';
import SeloCoracao from '../../assets/selo-coracao.png';

function BagCustomization() {
  const [customizationConfirmed, setCustomizationConfirmed] = useState(false);

  const {customBagText, setCustomBagText} = useZissouProduct();

  const renderCustomBagText = useCallback(() => {
    if (!customBagText.includes('selo')) return customBagText;

    if (customBagText === 'selo-trevo') {
      return (
        <Image src={SeloTrevo} className={styles.selo} width={20} height={20} />
      );
    } else if (customBagText === 'selo-pata') {
      return (
        <Image src={SeloPata} className={styles.selo} width={20} height={20} />
      );
    } else if (customBagText === 'selo-coracao') {
      return (
        <Image
          src={SeloCoracao}
          className={styles.selo}
          width={20}
          height={19}
        />
      );
    } else if (customBagText === 'selo-infinito') {
      return (
        <Image
          src={SeloInfinito}
          className={styles.selo}
          width={20}
          height={9}
        />
      );
    }

    return customBagText;
  }, [customBagText]);

  const handleClickSuggestion = useCallback(
    (e) => {
      setCustomBagText(e.currentTarget.dataset.suggestion);
    },
    [setCustomBagText],
  );

  return (
    <div className={styles.customization}>
      <div className={styles.customizationImage}>
        <Image src={CustomBagTemplate} width={193} height={274} />
        <span className={customBagText.length > 5 ? styles.small : ''}>
          {renderCustomBagText()}
        </span>
      </div>
      <div className={styles.customizationControl}>
        {!customizationConfirmed && (
          <>
            <textarea
              type="text"
              maxLength={10}
              placeholder="Escreva aqui&#10;(até 10 caracteres)"
              onChange={(e) => setCustomBagText(e.target.value)}
              value={customBagText}
            />
            <span className={styles.customizationControlSuggestText}>
              Ou escolha alguma de nossas sugestões
            </span>
            <div className={styles.customizationControlSuggestions}>
              <button
                data-suggestion="selo-infinito"
                onClick={handleClickSuggestion}
              >
                <Image src={SeloInfinito} width={20} height={9} />
              </button>
              <button
                data-suggestion="selo-trevo"
                onClick={handleClickSuggestion}
              >
                <Image src={SeloTrevo} width={20} height={20} />
              </button>
              <button
                data-suggestion="selo-pata"
                onClick={handleClickSuggestion}
              >
                <Image src={SeloPata} width={20} height={20} />
              </button>
              <button
                data-suggestion="selo-coracao"
                onClick={handleClickSuggestion}
              >
                <Image src={SeloCoracao} width={20} height={19} />
              </button>
            </div>
          </>
        )}
        <button
          className={styles.customizationControlConfirmation}
          onClick={() => setCustomizationConfirmed(!customizationConfirmed)}
        >
          {customizationConfirmed ? 'Editar' : 'Confirmar'}
        </button>
      </div>
    </div>
  );
}

export default BagCustomization;
