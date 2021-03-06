import {useCallback, useEffect, useState} from 'react';
import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen/client';
import parseUrl from '../../helpers/parseUrl';

import * as styles from './InteractiveComparatorColchoes.module.scss';
const SliderController = parseUrl('slider-controller.svg');
import useMobile from '../../hooks/useMobile';

export default function InteractiveComparatorColchoes() {
  const [sliderPercent, setSliderPercent] = useState(50);
  const [isHolding, setIsHolding] = useState(false);
  const isWindowDefined = typeof window !== 'undefined';

  const {isMobile} = useMobile();

  const handleMouseMove = useCallback(
    (e) => {
      if (!isHolding) return;

      const xPos = e.clientX || e.touches[0].clientX;

      const percent = (xPos / window?.innerWidth) * 100;

      setSliderPercent(percent);
    },
    [isHolding],
  );

  const handleControllerRelease = useCallback(() => {
    setIsHolding(false);
  }, []);

  const handleControllerHold = useCallback(() => {
    setIsHolding(true);
  }, []);

  useEffect(() => {
    if (!isWindowDefined) return;

    window?.addEventListener('mouseup', handleControllerRelease);

    return () =>
      window?.removeEventListener('mouseup', handleControllerRelease);
  }, [handleControllerRelease, isWindowDefined]);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      <div
        className={styles.colchaoCoral}
        style={{
          clipPath: `polygon(0% 0%,${sliderPercent}% 0%,${sliderPercent}% 100%, 0% 100%)`,
        }}
      />
      <div className={styles.slider} style={{width: `${sliderPercent}%`}}>
        <button
          type="button"
          className={styles.controller}
          onMouseDown={handleControllerHold}
          onTouchStart={handleControllerHold}
        >
          <Image
            src={SliderController}
            width={21}
            height={65}
            draggable={false}
            loading={'lazy'}
          />
        </button>
      </div>
      <div className={styles.content}>
        <h2>J?? decidiu seu colch??o?</h2>
        <Link to="/pages/comparativo-colchoes">Coral ou blue</Link>
      </div>
    </div>
  );
}
