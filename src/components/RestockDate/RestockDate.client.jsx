import {useProduct} from '@shopify/hydrogen/client';
import {useEffect, useState} from 'react';

import * as styles from './RestockDate.module.scss';

export default function RestockDate() {
  const {selectedVariant} = useProduct();

  const [hasRestockDate, setHasRestockDate] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (selectedVariant.metafields?.edges.length > 0) {
      let restockDate = selectedVariant.metafields.edges.filter((item) => {
        return item.node.key === 'data_de_restoque';
      });

      if (restockDate.length > 0) {
        setHasRestockDate(restockDate[0].node.value);
        setDate(new Date(hasRestockDate));
      }
    }
  }, [hasRestockDate, selectedVariant]);

  return hasRestockDate ? (
    <strong className={styles.Encomenda}>
      Receba a partir de{' '}
      {date.getUTCDate() +
        '/' +
        date
          .toLocaleString('default', {month: 'long'})
          .toUpperCase()
          .substr(0, 3)}
    </strong>
  ) : null;
}
