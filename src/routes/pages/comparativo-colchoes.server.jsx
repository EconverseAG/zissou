import {Suspense} from 'react';

import Layout from '../../components/Layout.server';

import CinematographBanner from '../../components/CinematographyBanner/CinematographyBanner.client';
import SleepAndLiveComparativo from '../../components/ComparativoColchoes/SleepAndLiveComparativo/SleepAndLiveComparativo.client';
import FormulaDoConforto from '../../components/ComparativoColchoes/FormulaDoConforto/FormulaDoConforto.client';
import OpenYourHeart from '../../components/OpenYourHeart/OpenYourHeart.client';
import CoralOrBlue from '../../components/CoralOrBlue/CoralOrBlue.client';
import TryIt from '../../components/TryIt/TryIt.client';
import ZissouStores from '../../components/ZissouStores/ZissouStores.client';
import Partners from '../../components/Partners/Partners.client';

export default function ComparativoColchoes() {
  return (
    <Layout>
      <Suspense fallback={<BoxFallback />}>
        <CinematographBanner />
        <SleepAndLiveComparativo />
        <FormulaDoConforto />
        <OpenYourHeart />
        <CoralOrBlue />
        <TryIt />
        <ZissouStores />
        <Partners />
      </Suspense>
    </Layout>
  );
}

function BoxFallback() {
  return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
}
