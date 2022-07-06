import {Image} from '@shopify/hydrogen';
import parseUrl from '../../helpers/parseUrl';

import useMobile from '../../hooks/useMobile';

import * as styles from './TravesseiroBagCustomization.module.scss';

const CustomizationText = parseUrl('bag-customizavel-text.png');
const CustomizationBackground = parseUrl('bag-customizavel-background.png');
const CustomizationBackgroundMobile = parseUrl(
  'bag-customizavel-background-mobile.png',
);
const BagCustomization = parseUrl('bag-customization.gif');

function TravesseiroBagCustomization() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <h2>Customização da bag</h2>
      <Image
        src={CustomizationText}
        width={681}
        height={641}
        className={styles.customizationText}
      />
      <div className={styles.customizationAnimation}>
        <Image src={BagCustomization} width={268} height={268} />
      </div>
      <Image
        src={isMobile ? CustomizationBackgroundMobile : CustomizationBackground}
        width={isMobile ? 430 : 2158}
        height={isMobile ? 394 : 1281}
        className={styles.background}
        loading={'lazy'}
      />
    </div>
  );
}

export default TravesseiroBagCustomization;
