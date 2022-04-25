import {Image} from '@shopify/hydrogen';

import useMobile from '../../hooks/useMobile';

import * as styles from './TravesseiroBagCustomization.module.scss';

import CustomizationText from '../../assets/bag-customizavel-text.png';
import CustomizationBackground from '../../assets/bag-customizavel-background.png';
import CustomizationBackgroundMobile from '../../assets/bag-customizavel-background-mobile.png';
import BagCustomization from '../../assets/bag-customization.gif';

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
      />
    </div>
  );
}

export default TravesseiroBagCustomization;
