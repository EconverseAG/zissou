import {useProduct} from '@shopify/hydrogen/client';
import {useEffect, useState} from 'react';
import useZissouProduct from '../../hooks/useZissouProduct';

import * as styles from './RestockDate.module.scss';

export default function RestockDate() {
  const {selectedVariant} = useProduct();
  const {isSpark} = useZissouProduct();

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

  return (
    hasRestockDate && (
      <div className={styles.Encomenda}>
        {isSpark && <strong>Pré-venda exclusiva</strong>}
        <strong>
          Receba a partir de{' '}
          {date.getUTCDate() +
            '/' +
            date
              .toLocaleString('default', {month: 'long'})
              .toUpperCase()
              .substr(0, 3)}
        </strong>
      </div>
    )
  );
}
