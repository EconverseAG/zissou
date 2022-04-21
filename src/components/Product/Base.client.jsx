import BaseBanner from '../BaseBanner/BaseBanner.client';
import SpecsBase from '../SpecsBase/SpecsBase.client';
import InteractiveComparatorColchoes from '../InteractiveComparatorColchoes/InteractiveComparatorColchoes.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import PotencializeSleep from '../PotencializeSleep/PotencializeSleep.client';
import ExperienciaZissouDesktop from '../CasaZissou/ExperienciaZissou/ExperienciaZissouDesktop';
import Banners from '../CasaZissou/Banners/Banners.client';

export default function Base() {
  return (
    <div className="flex flex-col">
      <BaseBanner />
      <PotencializeSleep />
      <SpecsBase />
      <InteractiveComparatorColchoes />
      <TryItFor100Days />
      <Banners />
      <ExperienciaZissouDesktop />
    </div>
  );
}
