import useMobile from '../../hooks/useMobile';
import parseUrl from '../../helpers/parseUrl';

const BannerSparkPDP = parseUrl('pdp-spark.png');

import BannerProductPage from '../ProductPage/BannerProductPage/BannerProductPage.client';
import Reviews from '../Reviews/Reviews.client';
import CoralOrBlue from '../CoralOrBlue/CoralOrBlue.client';
import Partners from '../Partners/Partners.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import DoubtsProductPage from '../ProductPage/DoubtsProductPage/DoubtsProductPage.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import SparkProduct from '../SparkProduct';
import {LoadingProvider} from '../../hooks/useLoading';

import Gif100DiasSpark from '../../assets/gif-100-dias-Spark.gif';
import ProductFixedBarColchao from '../ProductFixedBarColchao/ProductFixedBarColchao.client';
import SparkWhereAllStarts from '../SparkWhereAllStarts/SparkWhereAllStarts.client';
import TourSpark from '../ProductPage/TourColchao/TourSpark.client';
import SpecsColchaoSlick from '../ProductPage/SpecsColchaoSlick/SpecsColchaoSlick.client';

import SparkCgi from '../../assets/spark-cgi.mp4';
import SparkCgiMobile from '../../assets/spark-cgi-mobile.mp4';

export default function Coral() {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      <ProductFixedBarColchao title="SPARK" subtitle={'ONDE TUDO COMEÇA'} />
      {!isMobile && (
        <BannerProductPage src={BannerSparkPDP} title="Colchão Zissou Spark" />
      )}
      <SparkProduct />
      {!isMobile ? (
        <video style={{width: '100%'}} src={SparkCgi} autoPlay loop muted />
      ) : (
        <video
          style={{width: '100%'}}
          src={SparkCgiMobile}
          loop
          muted
          controls
          poster="https://cdn.shopify.com/s/files/1/1526/6199/files/banner-video-spark-produto.jpg"
        />
      )}
      <TourSpark />
      <SpecsColchaoSlick />
      <DoubtsProductPage />
      <TryItFor100Days image={Gif100DiasSpark} />
      <SparkWhereAllStarts />
      <ZissouStores />
      <Partners color={'#9873AC'} />
      <Reviews />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
