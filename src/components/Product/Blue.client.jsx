import parseUrl from '../../helpers/parseUrl';

const BannerBluePDP = parseUrl('pdp-blue.png');

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
import useMobile from '../../hooks/useMobile';
import ProductFixedBarColchao from '../ProductFixedBarColchao/ProductFixedBarColchao.client';

const BlueCgi =
  'https://cdn.shopify.com/videos/c/o/v/7d09d487968d4149b0f3e42be36736c7.mp4';
const BlueCgiMobile =
  'https://cdn.shopify.com/videos/c/o/v/5911e1105bc742eeb5c58cf822b1d1d7.mp4';

export default function Blue() {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      <ProductFixedBarColchao title="BLUE" subtitle={'LIBERTE SEUS SONHOS'} />
      {!isMobile && <BannerProductPage src={BannerBluePDP} />}
      <CoralProduct />
      {!isMobile ? (
        <video style={{width: '100%'}} src={BlueCgi} autoPlay loop muted />
      ) : (
        <video
          style={{width: '100%'}}
          src={BlueCgiMobile}
          loop
          muted
          controls
          poster="https://cdn.shopify.com/s/files/1/1526/6199/files/banner-video-blue-produto.jpg"
        />
      )}
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
