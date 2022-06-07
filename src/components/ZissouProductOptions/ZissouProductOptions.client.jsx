import {useCallback, useRef, useState} from 'react';
import {Image, useProduct} from '@shopify/hydrogen/client';

import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';

import DropdownArrow from '../../assets/select-dropdown-arrow.svg';

import * as styles from './ZissouProductOptions.module.scss';
import useOutsideClick from '../../hooks/useOutsideClick';
import SizeIcon from '../SizeIcon';

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
          {icons && (
            <div className={styles.selectIcon}>
              <SizeIcon name={selectedVariant?.selectedOptions[0].value} />
            </div>
          )}
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
                {icons && (
                  <div className={styles.selectIcon}>
                    <SizeIcon name={selectedOptions[0]?.value} />
                  </div>
                )}
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
