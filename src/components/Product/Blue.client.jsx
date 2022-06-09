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
import useMobile from '../../hooks/useMobile';
import ProductFixedBarColchao from '../ProductFixedBarColchao/ProductFixedBarColchao.client';

import BlueCgi from '../../assets/blue-cgi.mp4';
import BlueCgiMobile from '../../assets/blue-cgi-mobile.mp4';

export default function Blue() {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      <ProductFixedBarColchao title="BLUE" subtitle={'LIBERTE SEUS SONHOS'} />
      {!isMobile && <BannerProductPage src={BannerBluePDP} />}
      <CoralProduct />
      <video
        style={{width: '100%'}}
        src={isMobile ? BlueCgiMobile : BlueCgi}
        autoPlay
        loop
        muted
      />
      <CinematographyBanner />
      <TourColchao />
      <SpecsColchaoSlick />
      <DoubtsProductPage color={'#CADEE8'} hover={'#7D90A5'} />
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
