import useZissouProduct from '../../../hooks/useZissouProduct';
import SpecsBlueSlick from './SpecsBlueSlick.client';
import SpecsCoralSlick from './SpecsCoralSlick.client';

export default function SpecsColchaoSlick() {
  const {isCoral} = useZissouProduct();

  return isCoral ? <SpecsCoralSlick /> : <SpecsBlueSlick />;
}
