import HowDoYouSleep from '../HowDoYouSleep/HowDoYouSleep.client';
import ProductSection from './ProductSection.client';

export default function Travesseiro({product}) {
  return (
    <div className="flex flex-col">
      <ProductSection product={product} />
      <HowDoYouSleep />
    </div>
  );
}
