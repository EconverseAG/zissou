import SpecsBlueSlick from './SpecsBlueSlick.client';
import SpecsCoralSlick from './SpecsCoralSlick.client';

export default function SpecsColchaoSlick({coral}) {
  return coral ? <SpecsCoralSlick /> : <SpecsBlueSlick />;
}
