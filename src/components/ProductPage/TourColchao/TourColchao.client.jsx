import TourCoral from './TourCoral.client';
import TourBlue from './TourBlue.client';
import useZissouProduct from '../../../hooks/useZissouProduct';

export default function TourColchao() {
  const {isCoral} = useZissouProduct();

  return isCoral ? <TourCoral /> : <TourBlue />;
}
