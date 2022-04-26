import DuvetBanner from '../DuvetBanner';
import DuvetHowToDescribe from '../DuvetHowToDescribe';
import DuvetTechnical from '../DuvetTechnical';
import Partners from '../Partners/Partners.client';
import TheSecret from '../TheSecret';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';

export default function Duvet() {
  return (
    <div className="flex flex-col">
      <DuvetBanner />
      <DuvetHowToDescribe />
      <TheSecret productName="Duvet Zissou" />
      <DuvetTechnical />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color="#779ABF" />
    </div>
  );
}
