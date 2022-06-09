import BaseBanner from '../BaseBanner/BaseBanner.client';
import SpecsBase from '../SpecsBase/SpecsBase.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import PotencializeSleep from '../PotencializeSleep/PotencializeSleep.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';
import BaseTechnical from '../BaseTechnical/BaseTechnical.client';
import BaseProduct from '../BaseProduct';
import {LoadingProvider} from '../../hooks/useLoading';
import ProductFixedBar from '../ProductFixedBar';
import BaseHaveYouDecidedYourColchao from '../BaseHaveYouDecidedYourColchao';

import Gif100Dias from '../../assets/gif_100dias.gif';

export default function Base() {
  return (
    <LoadingProvider>
      <ProductFixedBar title="Base Zissou" />
      <div className="flex flex-col">
        <BaseBanner />
        <BaseProduct />
        <PotencializeSleep />
        <SpecsBase />
        <BaseHaveYouDecidedYourColchao />
        <BaseTechnical />
        <TryItFor100Days image={Gif100Dias} />
        <ZissouStores />
        <Partners color="#779ABF" />
      </div>
    </LoadingProvider>
  );
}
