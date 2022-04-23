import BaseBanner from '../BaseBanner/BaseBanner.client';
import SpecsBase from '../SpecsBase/SpecsBase.client';
import InteractiveComparatorColchoes from '../InteractiveComparatorColchoes/InteractiveComparatorColchoes.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import PotencializeSleep from '../PotencializeSleep/PotencializeSleep.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';
import BaseTechnical from '../BaseTechnical/BaseTechnical.client';
import ProductSection from './ProductSection.client';

export default function Base({product}) {
  return (
    <div className="flex flex-col">
      <BaseBanner />
      <ProductSection product={product} />
      <PotencializeSleep />
      <SpecsBase />
      <InteractiveComparatorColchoes />
      <BaseTechnical />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color="#779ABF" />
    </div>
  );
}
