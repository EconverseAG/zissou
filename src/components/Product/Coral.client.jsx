import useMobile from '../../hooks/useMobile';
import parseUrl from '../../helpers/parseUrl';
const BannerCoralPDP = parseUrl('pdp-coral.png');

import BannerProductPage from '../ProductPage/BannerProductPage/BannerProductPage.client';
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

const Gif100DiasCoral = parseUrl('gif_100_dias_coral.gif');
import ProductFixedBarColchao from '../ProductFixedBarColchao/ProductFixedBarColchao.client';

import CoralCGI from '../../assets/coral_cgi.mp4';
import CoralCGIMobile from '../../assets/coral_cgi_mobile.mp4';

export default function Coral() {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      <ProductFixedBarColchao title="CORAL" subtitle={'A EVOLUÇÃO DO SONO'} />
      {!isMobile && <BannerProductPage src={BannerCoralPDP} />}
      <CoralProduct />
      {!isMobile ? (
        <video style={{width: '100%'}} src={CoralCGI} autoPlay loop muted />
      ) : (
        <video
          style={{width: '100%'}}
          src={CoralCGIMobile}
          loop
          muted
          // autoPlay
          controls
          poster="https://cdn.shopify.com/s/files/1/1526/6199/files/banner-video-coral-produto.jpg"
        />
      )}
      <TourColchao />
      <SpecsColchaoSlick />
      <DoubtsProductPage />
      <InstagramZissou
        title={'VEM DE CORAL QUE NÃO TEM ERRO :)'}
        background={'180deg, rgba(244,133,128,1) 0%, rgba(255,204,199,1) 100%'}
      />
      <TryItFor100Days image={Gif100DiasCoral} />
      <ZissouStores />
      <Partners color={'#F48580'} />
      <Reviews />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
