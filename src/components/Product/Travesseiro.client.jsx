import HowDoYouSleep from '../HowDoYouSleep/HowDoYouSleep.client';
import ProductSection from './ProductSection.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';
import TravesseiroTechnical from '../TravesseiroTechnical/TravesseiroTechnical.client';
import TravesseiroWashableOption from '../TravesseiroWashableOption';
import TravesseiroXRay from '../TravesseiroXRay';

export default function Travesseiro({product}) {
  return (
    <div className="flex flex-col">
      <ProductSection product={product} />
      <HowDoYouSleep />
      <TravesseiroXRay />
      <TravesseiroWashableOption />
      <TravesseiroTechnical />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color="#779ABF" />
    </div>
  );
}
