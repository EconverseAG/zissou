import SpecsBase from '../SpecsBase/SpecsBase.client';
import InteractiveComparatorColchoes from '../InteractiveComparatorColchoes/InteractiveComparatorColchoes.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';

export default function Base() {
  return (
    <div className="flex flex-col">
      <SpecsBase />
      <InteractiveComparatorColchoes />
      <TryItFor100Days />
    </div>
  );
}
