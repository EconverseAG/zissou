import parseUrl from '../../helpers/parseUrl';
import {LoadingProvider} from '../../hooks/useLoading';
import useMobile from '../../hooks/useMobile';

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

const Gif100Dias = parseUrl('gif_100dias.gif');

export default function Colchoes({coral, blue, spark}) {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      {!isMobile && <ColchoesBanner />}
      <SleepAndLiveComparativo coral={coral} blue={blue} spark={spark} />
      {isMobile && <ColchoesBanner />}
      <FormulaDoConforto />
      <Combinacao />
      <SuporteIdeal />
      <Faq />
      <FormulaMagica />
      <OpenYourHeart />
      <CoralOrBlue />
      <TryItFor100Days image={Gif100Dias} />
      <ZissouStores />
      <Partners />
    </LoadingProvider>
  );
}
