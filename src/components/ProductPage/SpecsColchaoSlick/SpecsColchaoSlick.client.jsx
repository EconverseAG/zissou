import useZissouProduct from '../../../hooks/useZissouProduct';
import SpecsBlueSlick from './SpecsBlueSlick.client';
import SpecsCoralSlick from './SpecsCoralSlick.client';
import SpecsSparkSlick from './SpecsSparkSlick.client';

export default function SpecsColchaoSlick() {
  const {isCoral, isSpark} = useZissouProduct();

  return isCoral ? (
    <SpecsCoralSlick />
  ) : isSpark ? (
    <SpecsSparkSlick />
  ) : (
    <SpecsBlueSlick />
  );
}
