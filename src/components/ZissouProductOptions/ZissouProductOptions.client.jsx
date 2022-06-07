import {useCallback, useRef, useState} from 'react';
import {Image, useProduct} from '@shopify/hydrogen/client';

import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';

import DropdownArrow from '../../assets/select-dropdown-arrow.svg';

import SolteiroIcon from '../../assets/solteiro.png';
import SolteiroEspecialIcon from '../../assets/solteiro-especial.png';
import CasalIcon from '../../assets/casal.png';
import KingIcon from '../../assets/king.png';
import KingBrIcon from '../../assets/king-br.png';
import QueenIcon from '../../assets/queen.png';

import SolteiroIconBlue from '../../assets/solteiro-blue.png';
import CasalIconBlue from '../../assets/casal-blue.png';
import KingIconBlue from '../../assets/king-blue.png';
import KingBrIconBlue from '../../assets/king-br-blue.png';
import QueenIconBlue from '../../assets/queen-blue.png';

import * as styles from './ZissouProductOptions.module.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

function ZissouProductOptions({
  title,
  info,
  icons,
  uppercaseTitle,
  className,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);

  const {isCoral, isColchao, isSpark} = useZissouProduct();
  const {variants, setSelectedOption, selectedVariant} = useProduct();

  const containerRef = useRef(null);

  useOutsideClick(containerRef, () => setIsOpen(false));

  const {isMobile} = useMobile();

  const handleSelection = useCallback(
    (selectedOptions) => {
      setSelectedOption(selectedOptions[0].name, selectedOptions[0].value);
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
        icon = isColchao && !isCoral ? SolteiroIconBlue : SolteiroIcon;
        width = 17;
      } else if (option.includes('Solteiro Especial')) {
        icon = isColchao && !isCoral ? SolteiroIconBlue : SolteiroEspecialIcon;
        width = 17;
      } else if (option.includes('Casal')) {
        icon = isColchao && !isCoral ? CasalIconBlue : CasalIcon;
        width = 35;
      } else if (option.includes('King')) {
        icon = isColchao && !isCoral ? KingIconBlue : KingIcon;
        width = 39;
        height = 46;
      } else if (option.includes('King Br')) {
        icon = isColchao && !isCoral ? KingBrIconBlue : KingBrIcon;
        width = 39;
        height = 46;
      } else if (option.includes('Queen')) {
        icon = isColchao && !isCoral ? QueenIconBlue : QueenIcon;
        width = 37;
        height = 46;
      }

      if (!icon) return;

      return (
        <div className={styles.selectIcon}>
          <Image src={icon} width={width} height={height} loading={'lazy'} />
        </div>
      );
    },
    [icons, isColchao, isCoral],
  );

  const renderFormattedName = useCallback((name) => {
    if (!name) return;

    const splittedName = name.split('(');

    if (splittedName.length <= 1 || !splittedName[0])
      return <strong>{name}</strong>;

    return (
      <>
        <strong>{splittedName[0]}</strong>
        <span>{splittedName[1].replace(')', '')}</span>
      </>
    );
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''} ${
        className || ''
      } ${!isColchao ? styles.lilac : isSpark ? styles.spark : ''}`}
      ref={containerRef}
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
      <fieldset
        className={`${styles.select} ${
          !isCoral && isColchao && isSpark
            ? styles.selectSpark
            : styles.selectBlue
        }`}
        key={name}
      >
        <button
          className={`${styles.selectOpen} ${
            !isCoral && isColchao && isSpark
              ? styles.selectSpark
              : styles.selectBlue
          }`}
          onClick={() => setIsOpen(true)}
        >
          {renderIcon(selectedVariant?.selectedOptions[0].value)}
          <p>
            {renderFormattedName(selectedVariant?.selectedOptions[0].value)}
          </p>
          <span
            className={`${styles.selectOpenArrow} ${
              !isCoral && isColchao && isSpark
                ? styles.selectSpark
                : styles.selectBlue
            }`}
          >
            <Image
              src={DropdownArrow}
              width={26}
              height={13}
              loading={'lazy'}
            />
          </span>
        </button>
        {info && <span className={styles.info}>{info}</span>}
        {isOpen && (
          <div
            className={`${styles.selectDropdown} ${
              !isCoral && isColchao && isSpark
                ? styles.selectSpark
                : styles.selectBlue
            }`}
          >
            {variants?.map(({id, selectedOptions}) => (
              <button
                key={id}
                onClick={() => handleSelection(selectedOptions)}
                className={styles.selectDropdownOption}
              >
                {renderIcon(selectedOptions[0]?.value)}
                <p>{renderFormattedName(selectedOptions[0]?.value)}</p>
              </button>
            ))}
          </div>
        )}
      </fieldset>
    </div>
  );
}

export default ZissouProductOptions;
