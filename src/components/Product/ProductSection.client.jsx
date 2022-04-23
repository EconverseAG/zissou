import {
  flattenConnection,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from '@shopify/hydrogen/client';

import ProductOptions from '../ProductOptions.client';
import Gallery from '../Gallery.client';

import AddToCartMarkup from '../AddToCartMarkup/AddToCartMarkup.client';

export default function ProductSection({product}) {
  const initialVariant = flattenConnection(product.variants)[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-16">
      <div className="md:hidden mt-5 mb-8">
        <ProductTitle as="h1" className="text-4xl font-bold text-black mb-4" />
        {product.vendor && (
          <div className="text-sm font-medium mb-2 text-gray-900">
            {product.vendor}
          </div>
        )}
        <span />
        <div className="flex justify-between md:block">
          <ProductPrice
            className="text-gray-500 line-through text-lg font-semibold"
            priceType="compareAt"
            variantId={initialVariant.id}
          />
          <ProductPrice
            className="text-gray-900 text-lg font-semibold"
            variantId={initialVariant.id}
          />
        </div>
      </div>

      <Gallery />

      <div>
        <div className="hidden md:block">
          <ProductTitle
            as="h1"
            className="text-5xl font-bold text-black mb-4"
          />
          {product.vendor && (
            <div className="text-sm font-medium mb-2 text-gray-900">
              {product.vendor}
            </div>
          )}
          <ProductPrice
            className="text-gray-500 line-through text-lg font-semibold"
            priceType="compareAt"
            variantId={initialVariant.id}
          />
          <ProductPrice
            className="text-gray-900 text-lg font-semibold"
            variantId={initialVariant.id}
          />
        </div>
        <div className="mt-8">
          <ProductOptions />
          <AddToCartMarkup />
        </div>
        <ProductDescription className="prose border-t border-gray-200 pt-6 text-black text-md" />
      </div>
    </div>
  );
}
