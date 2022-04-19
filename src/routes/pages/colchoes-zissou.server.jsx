import {Suspense} from 'react';

import Layout from '../../components/Layout.server';

import CinematographBanner from '../../components/CinematographyBanner/CinematographyBanner.client';
import SleepAndLiveComparativo from '../../components/ComparativoColchoes/SleepAndLiveComparativo/SleepAndLiveComparativo.client';
import FormulaDoConforto from '../../components/ComparativoColchoes/FormulaDoConforto/FormulaDoConforto.client';
import OpenYourHeart from '../../components/OpenYourHeart/OpenYourHeart.client';
import CoralOrBlue from '../../components/CoralOrBlue/CoralOrBlue.client';
import TryItFor100Days from '../../components/TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../../components/ZissouStores/ZissouStores.client';
import Partners from '../../components/Partners/Partners.client';
import Combinacao from '../../components/ComparativoColchoes/Combinacao/Combinacao.client';
import FormulaMagica from '../../components/ComparativoColchoes/FormulaMagica/FormulaMagica.client';
import Legget from '../../components/ComparativoColchoes/Legget/Legget.client';
import SuporteIdeal from '../../components/ComparativoColchoes/SuporteIdeal/SuporteIdeal.client';
import Faq from '../../components/ComparativoColchoes/Faq/Faq.client';

export default function ComparativoColchoes() {
  return (
    <Layout>
      <Suspense fallback={<BoxFallback />}>
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

function BoxFallback() {
  return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
}
