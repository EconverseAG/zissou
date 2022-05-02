import {useCallback, useState} from 'react';
import {Image, useProduct} from '@shopify/hydrogen/client';

import DropdownArrow from '../../assets/select-dropdown-arrow.svg';

import SolteiroIcon from '../../assets/solteiro.png';
import SolteiroEspecialIcon from '../../assets/solteiro-especial.png';
import CasalIcon from '../../assets/casal.png';
import KingIcon from '../../assets/king.png';
import KingBrIcon from '../../assets/king-br.png';
import QueenIcon from '../../assets/queen.png';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouProductOptions.module.scss';

function ZissouProductOptions({
  title,
  info,
  icons,
  uppercaseTitle,
  className,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);

  const {isMobile} = useMobile();

  const {options, setSelectedOption, selectedOptions} = useProduct();

  const handleSelection = useCallback(
    (name, value) => {
      setSelectedOption(name, value);
      setIsOpen(false);
    },
    [setSelectedOption],
  );

  const renderIcon = useCallback(
    (option) => {
      if (!option || !icons) return;

      let icon;
      let width;
      let height = 40;

      if (option.includes('Solteiro')) {
        icon = SolteiroIcon;
        width = 17;
      } else if (option.includes('Solteiro Especial')) {
        icon = SolteiroEspecialIcon;
        width = 17;
      } else if (option.includes('Casal')) {
        icon = CasalIcon;
        width = 35;
      } else if (option.includes('King')) {
        icon = KingIcon;
        width = 39;
        height = 46;
      } else if (option.includes('King Br')) {
        icon = KingBrIcon;
        width = 39;
        height = 46;
      } else if (option.includes('Queen')) {
        icon = QueenIcon;
        width = 37;
        height = 46;
      }

      if (!icon) return;

      return (
        <div className={styles.selectIcon}>
          <Image src={icon} width={width} height={height} />
        </div>
      );
    },
    [icons],
  );

  const renderFormattedName = useCallback((name) => {
    if (!name) return;

    const splittedName = name.split('(');

    if (splittedName.length <= 1 || !splittedName[0])
      return (
        <p>
          <strong>{name}</strong>
        </p>
      );

    return (
      <p>
        <strong>{splittedName[0]}</strong>
        <span>{splittedName[1].replace(')', '')}</span>
      </p>
    );
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      {...rest}
    >
      {title && (
        <h2
          className={`${styles.title} ${
            uppercaseTitle ? styles.uppercase : ''
          }`}
        >
          {title}
        </h2>
      )}
      {options?.map(({name, values}) => (
        <fieldset className={styles.select} key={name}>
          <button className={styles.selectOpen} onClick={() => setIsOpen(true)}>
            {renderIcon(selectedOptions[name])}
            {renderFormattedName(selectedOptions[name])}
            <span className={styles.selectOpenArrow}>
              <Image src={DropdownArrow} width={26} height={13} />
            </span>
          </button>
          {info && <span className={styles.info}>{info}</span>}
          {isOpen && (
            <div className={styles.selectDropdown}>
              {values?.map((value) => (
                <button
                  key={value}
                  onClick={() => handleSelection(name, value)}
                  className={styles.selectDropdownOption}
                >
                  {renderIcon(value)}
                  {renderFormattedName(value)}
                </button>
              ))}
            </div>
          )}
        </fieldset>
      ))}
    </div>
  );
}

export default ZissouProductOptions;
