import {LoadingProvider} from '../../hooks/useLoading';

import CoralOrBlue from '../CoralOrBlue/CoralOrBlue.client';
import OpenYourHeart from '../OpenYourHeart/OpenYourHeart.client';
import Partners from '../Partners/Partners.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import ColchoesBanner from './ColchoesBanner/ColchoesBanner.client';
import Combinacao from './Combinacao/Combinacao.client';
import Faq from './Faq/Faq.client';
import FormulaDoConforto from './FormulaDoConforto/FormulaDoConforto.client';
import FormulaMagica from './FormulaMagica/FormulaMagica.client';
import SleepAndLiveComparativo from './SleepAndLiveComparativo/SleepAndLiveComparativo.client';
import SuporteIdeal from './SuporteIdeal/SuporteIdeal.client';

export default function Colchoes() {
  return (
    <LoadingProvider>
      <ColchoesBanner />
      <SleepAndLiveComparativo />
      <FormulaDoConforto />
      <Combinacao />
      <SuporteIdeal />
      <Faq />
      <FormulaMagica />
      <OpenYourHeart />
      <CoralOrBlue />
      <TryItFor100Days />
      <ZissouStores />
      <Partners />
    </LoadingProvider>
  );
}
