import SpecsBase from '../SpecsBase/SpecsBase.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';

export default function Base() {
  return (
    <div className="flex flex-col">
      <SpecsBase />
      <TryItFor100Days />
    </div>
  );
}
