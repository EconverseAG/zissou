import {ProductTitle, ProductDescription} from '@shopify/hydrogen/client';

import ProductOptions from '../ProductOptions.client';
import Gallery from '../Gallery.client';

import ZissouProductPrice from '../ZissouProductPrice';
import ZissouAddToCart from '../ZissouAddToCart';

export default function ProductSection({product}) {
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
        <ZissouProductPrice />
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
          <ZissouProductPrice />
        </div>
        <div className="mt-8">
          <ProductOptions />
          <ZissouAddToCart />
        </div>
        <ProductDescription className="prose border-t border-gray-200 pt-6 text-black text-md" />
      </div>
    </div>
  );
}
