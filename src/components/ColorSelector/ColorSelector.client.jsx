import {useCallback} from 'react';

import useZissouProduct from '../../hooks/useZissouProduct';
import useMobile from '../../hooks/useMobile';

import * as styles from './ColorSelector.module.scss';

function ColorSelector({className, ...rest}) {
  const {selectedColor, setSelectedColor} = useZissouProduct();
  const {isMobile} = useMobile();

  const handleColorSelection = useCallback(
    (e) => {
      setSelectedColor(e.currentTarget.dataset.color);
    },
    [setSelectedColor],
  );

  return (
    <div
      className={`${styles.colorSelector} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      {...rest}
    >
      <span>Selecione a cor</span>
      <div className={styles.colorSelectorList}>
        <button
          data-color="white"
          className={`${styles.colorSelectorListItem} ${
            selectedColor === 'white' ? styles.selected : ''
          }`}
          onClick={handleColorSelection}
        >
          <span>Branco</span>
          <div
            className={`${styles.colorSelectorListItemColor} ${styles.white}`}
          />
        </button>
        <button
          data-color="gray"
          className={`${styles.colorSelectorListItem} ${
            selectedColor === 'gray' ? styles.selected : ''
          }`}
          onClick={handleColorSelection}
        >
          <span>Cinza</span>
          <div
            className={`${styles.colorSelectorListItemColor} ${styles.gray}`}
          />
        </button>
      </div>
    </div>
  );
}

export default ColorSelector;
