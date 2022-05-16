import BannerBluePDP from '../../assets/pdp-blue.png';

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

export default function Blue() {
  return (
    <LoadingProvider>
      <BannerProductPage src={BannerBluePDP} />
      <CoralProduct />
      <CinematographyBanner />
      <TourColchao />
      <SpecsColchaoSlick />
      <DoubtsProductPage color={'#CADEE8'} />
      <InstagramZissou
        title={'TENHO O BLUE E NÃO TROCO POR NADA :)'}
        background={
          '90deg, rgba(65,82,100,1) 0%, rgba(65,82,100,1) 20%, rgba(202,222,232,1) 100%'
        }
      />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color={'#415264'} />
      <Reviews />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
