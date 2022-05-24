import {AddToCartButton, Image} from '@shopify/hydrogen/client';

import * as styles from './Shelf.module.scss';

export default function Shelf({variant, color, imageSrc}) {
  const {title, availableForSale, image, priceV2} = variant.node;

  const oldPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceV2.amount);

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceV2.amount * 0.95);

  return (
    <div className={styles.ShelfContainer}>
      <div className={styles.ShelfTop}>
        <div className={styles.ShelfImage}>
          {!availableForSale && (
            <div className={styles.ShelfSoldOut}>
              <div
                className={styles.ShelfSoldOutMessage}
                style={{background: color}}
              >
                <span>Esgotado</span>
              </div>
            </div>
          )}
          <Image src={imageSrc || image.url} width={339} height={263} />
        </div>
        <div className={styles.ShelfInfo}>
          <strong className={styles.ShelfTitle}>{title.split(' (')[0]}</strong>
          <span className={styles.ShelfOption}>
            {title.split(' (')[1].replace(')', '')}
          </span>
        </div>
      </div>
      <div className={styles.ShelfBottom}>
        <span className={styles.ShelfOldPrice}>De {oldPrice}</span>
        <span className={styles.ShelfPrice}>Por {formattedPrice}</span>
        <AddToCartButton
          className={styles.ShelfBuyButton}
          variantId={variant.node.id}
          quantity={1}
          disabled={!availableForSale}
        >
          {availableForSale ? 'Adicionar ao carrinho' : 'Indisponível'}
        </AddToCartButton>
      </div>
    </div>
  );
}
