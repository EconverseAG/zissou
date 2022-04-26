import TourCoral from './TourCoral.client';
import TourBlue from './TourBlue.client';

export default function TourColchao({coral}) {
  return coral ? <TourCoral /> : <TourBlue />;
}
