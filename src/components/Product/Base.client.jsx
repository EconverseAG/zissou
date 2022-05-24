import BaseBanner from '../BaseBanner/BaseBanner.client';
import SpecsBase from '../SpecsBase/SpecsBase.client';
import InteractiveComparatorColchoes from '../InteractiveComparatorColchoes/InteractiveComparatorColchoes.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import PotencializeSleep from '../PotencializeSleep/PotencializeSleep.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';
import BaseTechnical from '../BaseTechnical/BaseTechnical.client';
import BaseProduct from '../BaseProduct';
import {LoadingProvider} from '../../hooks/useLoading';
import ProductFixedBar from '../ProductFixedBar';

export default function Base() {
  return (
    <LoadingProvider>
      <ProductFixedBar title="Base Zissou" />
      <div className="flex flex-col">
        <BaseBanner />
        <BaseProduct />
        <PotencializeSleep />
        <SpecsBase />
        <InteractiveComparatorColchoes />
        <BaseTechnical />
        <TryItFor100Days />
        <ZissouStores />
        <Partners color="#779ABF" />
      </div>
    </LoadingProvider>
  );
}
