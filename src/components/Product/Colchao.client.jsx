import {useEffect, useState} from 'react';

import {
  flattenConnection,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from '@shopify/hydrogen/client';

import ProductOptions from '../ProductOptions.client';
import Gallery from '../Gallery.client';

import AddToCartMarkup from '../AddToCartMarkup/AddToCartMarkup.client';

import BannerCoralPDP from '../../assets/pdp-coral.png';
import BannerBluePDP from '../../assets/pdp-blue.png';

import BannerProductPage from '../ProductPage/BannerProductPage/BannerProductPage.client';
import CinematographyBanner from '../../components/CinematographyBanner/CinematographyBanner.client';
import Reviews from '../../components/Reviews/Reviews.client';
import CoralOrBlue from '../../components/CoralOrBlue/CoralOrBlue.client';
import Partners from '../Partners/Partners.client';
import ZissouStores from '../../components/ZissouStores/ZissouStores.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import DoubtsProductPage from '../ProductPage/DoubtsProductPage/DoubtsProductPage.client';
import InstagramZissou from '../../components/InstagramZissou/InstagramZissou.client';
import SpecsColchaoSlick from '../ProductPage/SpecsColchaoSlick/SpecsColchaoSlick.client';

export default function Colchao({title, product}) {
  const initialVariant = flattenConnection(product.variants)[0];
  const [isCoral, setIsCoral] = useState(false);

  useEffect(() => {
    if (title.includes('Coral')) {
      setIsCoral(true);
    }
  }, [title]);

  return (
    <>
      {isCoral ? (
        <BannerProductPage product={product} src={BannerCoralPDP} />
      ) : (
        <BannerProductPage product={product} src={BannerBluePDP} />
      )}

      {/* DIV DE CONVERSÃO QUE SERÁ ALTERADA DEPOIS */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-16">
        <div className="md:hidden mt-5 mb-8">
          <ProductTitle
            as="h1"
            className="text-4xl font-bold text-black mb-4"
          />
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

      <CinematographyBanner />

      {isCoral ? (
        <SpecsColchaoSlick coral={isCoral} />
      ) : (
        <SpecsColchaoSlick coral={isCoral} />
      )}

      {isCoral ? (
        <DoubtsProductPage color={'#D4A8BF'} />
      ) : (
        <DoubtsProductPage color={'#CADEE8'} />
      )}

      {isCoral ? (
        <InstagramZissou
          title={'VEM DE CORAL QUE NÃO TEM ERRO :)'}
          background={
            '180deg, rgba(244,133,128,1) 0%, rgba(255,204,199,1) 100%'
          }
        />
      ) : (
        <InstagramZissou
          title={'TENHO O BLUE E NÃO TROCO POR NADA :)'}
          background={
            '90deg, rgba(65,82,100,1) 0%, rgba(65,82,100,1) 20%, rgba(202,222,232,1) 100%'
          }
        />
      )}

      <TryItFor100Days />

      <ZissouStores />
      {isCoral ? (
        <Partners color={'#F48580'} />
      ) : (
        <Partners color={'#415264'} />
      )}

      <Reviews />

      <CoralOrBlue />
    </>
  );
}
