import {Suspense} from 'react';

import Layout from '../../components/Layout.server';

import CinematographBanner from '../../components/CinematographyBanner/CinematographyBanner.client';
import SleepAndLiveComparativo from '../../components/ColchoesZissou/SleepAndLiveComparativo/SleepAndLiveComparativo.client';
import FormulaDoConforto from '../../components/ColchoesZissou/FormulaDoConforto/FormulaDoConforto.client';
import OpenYourHeart from '../../components/OpenYourHeart/OpenYourHeart.client';
import CoralOrBlue from '../../components/CoralOrBlue/CoralOrBlue.client';
import TryItFor100Days from '../../components/TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../../components/ZissouStores/ZissouStores.client';
import Partners from '../../components/Partners/Partners.client';
import Combinacao from '../../components/ColchoesZissou/Combinacao/Combinacao.client';
import FormulaMagica from '../../components/ColchoesZissou/FormulaMagica/FormulaMagica.client';
import Legget from '../../components/ColchoesZissou/Legget/Legget.client';
import SuporteIdeal from '../../components/ColchoesZissou/SuporteIdeal/SuporteIdeal.client';
import Faq from '../../components/ColchoesZissou/Faq/Faq.client';
import ZissouLoading from '../../components/ZissouLoading';

export default function ColchoesZissou() {
  return (
    <Layout>
      <Suspense fallback={<ZissouLoading />}>
        <CinematographBanner />
        <SleepAndLiveComparativo />
        <FormulaDoConforto />
        <Combinacao />
        <SuporteIdeal />
        <Legget />
        <Faq />
        <FormulaMagica />
        <OpenYourHeart />
        <CoralOrBlue />
        <TryItFor100Days />
        <ZissouStores />
        <Partners />
      </Suspense>
    </Layout>
  );
}
