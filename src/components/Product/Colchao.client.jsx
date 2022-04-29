import {useEffect, useState} from 'react';

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
// import ProductSection from './ProductSection.client';
import TourColchao from '../ProductPage/TourColchao/TourColchao.client';
import CoralProduct from '../CoralProduct';

export default function Colchao({title, product, travesseiroWashable}) {
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
      {/* <ProductSection product={product} /> */}
      <CoralProduct
        travesseiroWashable={travesseiroWashable}
        product={product}
      />

      <CinematographyBanner />

      <TourColchao coral={isCoral} />

      <SpecsColchaoSlick coral={isCoral} />

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
