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

import Gif100DiasCoral from '../../assets/gif_100_dias_coral.webm';
import ProductFixedBarColchao from '../ProductFixedBarColchao/ProductFixedBarColchao.client';
import SparkWhereAllStarts from '../SparkWhereAllStarts/SparkWhereAllStarts.client';
import TourSpark from '../ProductPage/TourColchao/TourSpark.client';
import SpecsColchaoSlick from '../ProductPage/SpecsColchaoSlick/SpecsColchaoSlick.client';

export default function Coral() {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      <ProductFixedBarColchao title="SPARK" subtitle={'ONDE TUDO COMEÇA'} />
      {!isMobile && <BannerProductPage src={BannerSparkPDP} />}
      <SparkProduct />
      <TourSpark />
      <SpecsColchaoSlick />
      <DoubtsProductPage />
      <TryItFor100Days video={Gif100DiasCoral} />
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
