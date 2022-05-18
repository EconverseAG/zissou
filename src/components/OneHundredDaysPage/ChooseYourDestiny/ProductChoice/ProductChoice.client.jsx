import {Image, Link} from '@shopify/hydrogen';

import useMobile from '../../../../hooks/useMobile';

import * as styles from './ProductChoice.module.scss';

function ProductChoice({name, image, url}) {
  const {isMobile} = useMobile();

  return (
    <Link
      to={url}
      className={`${styles.container} ${isMobile ? styles.mobile : ''}`}
    >
      <Image
        src={image}
        width={isMobile ? 245 : 368}
        height={isMobile ? 223 : 348}
      />
      <strong>{name}</strong>
    </Link>
  );
}

export default ProductChoice;
