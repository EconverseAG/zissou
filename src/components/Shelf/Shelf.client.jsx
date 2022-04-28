import {AddToCartButton, Image} from '@shopify/hydrogen/client';

import * as styles from './Shelf.module.scss';

export default function Shelf({variant}) {
  const {title, availableForSale, image, priceV2} = variant.node;

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceV2.amount);

  return (
    <div className={styles.ShelfContainer}>
      <div className={styles.ShelfTop}>
        <div className={styles.ShelfImage}>
          {!availableForSale && (
            <div className={styles.ShelfSoldOut}>
              <div className={styles.ShelfSoldOutMessage}>
                <span>Esgotado</span>
              </div>
            </div>
          )}
          <Image src={image.url} width={339} height={263} />
        </div>
        <div className={styles.ShelfInfo}>
          <strong className={styles.ShelfTitle}>{title.split(' (')[0]}</strong>
          <span className={styles.ShelfOption}>
            {title.split(' (')[1].replace(')', '')}
          </span>
        </div>
      </div>
      <div className={styles.ShelfBottom}>
        <span className={styles.ShelfPrice}>Por {formattedPrice}</span>
        <AddToCartButton
          className={styles.ShelfBuyButton}
          variantId={variant.node.id}
          quantity={1}
        >
          {availableForSale ? 'Adicionar ao carrinho' : 'Indisponível'}
        </AddToCartButton>
      </div>
    </div>
  );
}
