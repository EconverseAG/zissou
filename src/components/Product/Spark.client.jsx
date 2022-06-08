import useMobile from '../../hooks/useMobile';
import BannerSparkPDP from '../../assets/pdp-spark.png';

import BannerProductPage from '../ProductPage/BannerProductPage/BannerProductPage.client';
import Reviews from '../Reviews/Reviews.client';
import CoralOrBlue from '../CoralOrBlue/CoralOrBlue.client';
import Partners from '../Partners/Partners.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import DoubtsProductPage from '../ProductPage/DoubtsProductPage/DoubtsProductPage.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import InstagramZissou from '../InstagramZissou/InstagramZissou.client';
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
      <video
        style={{width: '100%'}}
        src={isMobile ? SparkCgiMobile : SparkCgi}
        autoPlay
        loop
        muted
      />
      <TourSpark />
      <SpecsColchaoSlick />
      <DoubtsProductPage />
      <TryItFor100Days image={Gif100DiasSpark} />
      <SparkWhereAllStarts />
      <InstagramZissou
        title={'#MEUMOMENTOSPARK'}
        subtitle={'Tudo começa com um Spark'}
        background={'180deg, #779ABF 0%, #9F85B2 100%'}
      />
      <ZissouStores />
      <Partners color={'#9873AC'} />
      <Reviews />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
