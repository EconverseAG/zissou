import SpecsBase from '../SpecsBase/SpecsBase.client';
import InteractiveComparatorColchoes from '../InteractiveComparatorColchoes/InteractiveComparatorColchoes.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import PotencializeSleep from '../PotencializeSleep/PotencializeSleep.client';

export default function Base() {
  return (
    <div className="flex flex-col">
      <PotencializeSleep />
      <SpecsBase />
      <InteractiveComparatorColchoes />
      <TryItFor100Days />
    </div>
  );
}
