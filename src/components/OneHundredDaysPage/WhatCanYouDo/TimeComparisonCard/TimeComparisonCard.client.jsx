import {Image} from '@shopify/hydrogen';
import useMobile from '../../../../hooks/useMobile';

import * as styles from './TimeComparisonCard.module.scss';

function TimeComparisonCard({image, imageWidth, imageHeight, children}) {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
      <Image src={image} width={imageWidth} height={imageHeight} />
      <p>{children}</p>
    </div>
  );
}

export default TimeComparisonCard;
