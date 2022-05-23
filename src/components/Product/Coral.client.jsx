import useMobile from '../../hooks/useMobile';
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

import Gif100DiasCoral from '../../assets/gif_100_dias_coral.webm';

export default function Coral() {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      {!isMobile && <BannerProductPage src={BannerCoralPDP} />}
      <CoralProduct />
      <CinematographyBanner />
      <TourColchao />
      <SpecsColchaoSlick />
      <DoubtsProductPage />
      <InstagramZissou
        title={'VEM DE CORAL QUE NÃO TEM ERRO :)'}
        background={'180deg, rgba(244,133,128,1) 0%, rgba(255,204,199,1) 100%'}
      />
      <TryItFor100Days video={Gif100DiasCoral} />
      <ZissouStores />
      <Partners color={'#F48580'} />
      <Reviews />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
