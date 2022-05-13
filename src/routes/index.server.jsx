import Layout from '../components/Layout.server';
import {Suspense} from 'react';

import CinematographyBanner from '../components/CinematographyBanner/CinematographyBanner.client';
import SleepAndLive from '../components/SleepAndLive/SleepAndLive.client';
import ChooseYourDestiny from '../components/ChooseYourDestiny/ChooseYourDestiny.client';
import ZissouStores from '../components/ZissouStores/ZissouStores.client';
import TryItFor100Days from '../components/TryItFor100Days/TryItFor100Days.client';
import Partners from '../components/Partners/Partners.client';
import OpenYourHeart from '../components/OpenYourHeart/OpenYourHeart.client';
import ZissouNaMidia from '../components/ZissouNaMidia/ZissouNaMidia.client';
import Instagram from '../components/InstagramZissou/InstagramZissou.client';
import Reviews from '../components/Reviews/Reviews.client';
import CoralOrBlue from '../components/CoralOrBlue/CoralOrBlue.client';
import Klabin from '../components/Klabin/Klabin.client';
import FamiliaZissou from '../components/FamiliaZissou/FamiliaZissou.client';
import ZissouLoading from '../components/ZissouLoading';
import {CacheDays} from '@shopify/hydrogen';

export default function Index({response}) {
  response.cache(CacheDays());

  return (
    <Suspense fallback={<ZissouLoading />}>
      <Layout>
        <CinematographyBanner />
        <SleepAndLive />
        <ChooseYourDestiny />
        <TryItFor100Days />
        <ZissouStores />
        <Partners />
        <OpenYourHeart />
        <ZissouNaMidia />
        <Instagram />
        <Reviews />
        <CoralOrBlue />
        <Klabin />
        <FamiliaZissou />
      </Layout>
    </Suspense>
  );
}
