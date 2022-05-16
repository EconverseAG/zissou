import BannerCoralPDP from '../../assets/pdp-coral.png';

import BannerProductPage from '../ProductPage/BannerProductPage/BannerProductPage.client';
import CinematographyBanner from '../CinematographyBanner/CinematographyBanner.client';
import Reviews from '../Reviews/Reviews.client';
import CoralOrBlue from '../CoralOrBlue/CoralOrBlue.client';
import Partners from '../Partners/Partners.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import DoubtsProductPage from '../ProductPage/DoubtsProductPage/DoubtsProductPage.client';
import InstagramZissou from '../InstagramZissou/InstagramZissou.client';
import SpecsColchaoSlick from '../ProductPage/SpecsColchaoSlick/SpecsColchaoSlick.client';
import TourColchao from '../ProductPage/TourColchao/TourColchao.client';
import CoralProduct from '../CoralProduct';
import {LoadingProvider} from '../../hooks/useLoading';

export default function Coral() {
  return (
    <LoadingProvider>
      <BannerProductPage src={BannerCoralPDP} />
      <CoralProduct />
      <CinematographyBanner />
      <TourColchao />
      <SpecsColchaoSlick />
      <DoubtsProductPage color={'#D4A8BF'} />
      <InstagramZissou
        title={'VEM DE CORAL QUE NÃO TEM ERRO :)'}
        background={'180deg, rgba(244,133,128,1) 0%, rgba(255,204,199,1) 100%'}
      />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color={'#F48580'} />
      <Reviews />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
