import Layout from '../components/Layout.server';
import {Suspense} from 'react';

import CinematographyBanner from '../components/CinematographyBanner/CinematographyBanner.client';
import SleepAndLive from '../components/SleepAndLive/SleepAndLive.client';
import ChooseYourDestiny from '../components/ChooseYourDestiny/ChooseYourDestiny.client';
import ZissouStores from '../components/ZissouStores/ZissouStores.client';
import TryIt from '../components/TryIt/TryIt.client';
import Partners from '../components/Partners/Partners.client';
import OpenYourHeart from '../components/OpenYourHeart/OpenYourHeart.client';
import ZissouNaMidia from '../components/ZissouNaMidia/ZissouNaMidia.client';
import Instagram from '../components/InstagramZissou/InstagramZissou.client';
import Reviews from '../components/Reviews/Reviews.client';
import CoralOrBlue from '../components/CoralOrBlue/CoralOrBlue.client';
import Klabin from '../components/Klabin/Klabin.client';
import FamiliaZissou from '../components/FamiliaZissou/FamiliaZissou.client';

export default function Index() {
  return (
    <Layout>
      <Suspense fallback={<BoxFallback />}>
        <CinematographyBanner />
        <SleepAndLive />
        <ChooseYourDestiny />
        <TryIt />
        <ZissouStores />
        <Partners />
        <OpenYourHeart />
        <ZissouNaMidia />
        <Instagram />
        <Reviews />
        <CoralOrBlue />
        <Klabin />
        <FamiliaZissou />
      </Suspense>
    </Layout>
  );
}

function BoxFallback() {
  return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
}
