import HowDoYouSleep from '../HowDoYouSleep/HowDoYouSleep.client';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';
import TravesseiroTechnical from '../TravesseiroTechnical/TravesseiroTechnical.client';
import TravesseiroWashableOption from '../TravesseiroWashableOption';
import TravesseiroXRay from '../TravesseiroXRay';
import TravesseiroBagCustomization from '../TravesseiroBagCustomization';
import TravesseiroBanner from '../TravesseiroBanner/TravesseiroBanner.client';
import TravesseiroProduct from '../TravesseiroProduct';

export default function Travesseiro() {
  return (
    <div className="flex flex-col">
      <TravesseiroBanner />
      <TravesseiroProduct />
      <HowDoYouSleep />
      <TravesseiroXRay />
      <TravesseiroWashableOption />
      <TravesseiroBagCustomization />
      <TravesseiroTechnical />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color="#779ABF" />
    </div>
  );
}
