import {useCallback, useEffect, useState} from 'react';
import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen/client';

import * as styles from './InteractiveComparatorColchoes.module.scss';
import SliderController from '../../assets/slider-controller.svg';

export default function InteractiveComparatorColchoes() {
  const [sliderPercent, setSliderPercent] = useState(50);
  const [isHolding, setIsHolding] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isHolding) return;

      const percent = (e.clientX / window.innerWidth) * 100;

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
    window.addEventListener('mouseup', handleControllerRelease);

    return () => window.removeEventListener('mouseup', handleControllerRelease);
  }, [handleControllerRelease]);

  return (
    <div
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
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
          />
        </button>
      </div>
      <div className={styles.content}>
        <h2>Já decidiu seu colchão?</h2>
        <Link to="/pages/comparativo-colchoes">Coral ou blue</Link>
      </div>
    </div>
  );
}
