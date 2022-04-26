import {useProduct, Image} from '@shopify/hydrogen/client';
import {useCallback, useState} from 'react';

import DropdownArrow from '../../assets/select-dropdown-arrow.svg';

import * as styles from './ZissouProductOptions.module.scss';

function ZissouProductOptions({title}) {
  const [isOpen, setIsOpen] = useState(false);

  const {options, setSelectedOption, selectedOptions} = useProduct();

  const handleSelection = useCallback(
    (name, value) => {
      setSelectedOption(name, value);
      setIsOpen(false);
    },
    [setSelectedOption],
  );

  return (
    <>
      {title && <h2>{title}</h2>}
      {options.map(({name, values}) => (
        <fieldset className={styles.select} key={name}>
          <button className={styles.selectOpen} onClick={() => setIsOpen(true)}>
            {selectedOptions[name]}
            <span className={styles.selectOpenArrow}>
              <Image src={DropdownArrow} width={26} height={13} />
            </span>
          </button>
          {isOpen && (
            <div className={styles.selectDropdown}>
              {values.map((value) => (
                <button
                  key={value}
                  onClick={() => handleSelection(name, value)}
                >
                  {value}
                </button>
              ))}
            </div>
          )}
        </fieldset>
      ))}
    </>
  );
}

export default ZissouProductOptions;
