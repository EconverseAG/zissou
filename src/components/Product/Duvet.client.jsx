import {LoadingProvider} from '../../hooks/useLoading';
import DuvetBanner from '../DuvetBanner';
import DuvetHowToDescribe from '../DuvetHowToDescribe';
import DuvetInside from '../DuvetInside';
import DuvetProduct from '../DuvetProduct';
import DuvetTechnical from '../DuvetTechnical';
import Partners from '../Partners/Partners.client';
import ProductFixedBar from '../ProductFixedBar';
import TheSecret from '../TheSecret';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';

export default function Duvet() {
  return (
    <LoadingProvider>
      <ProductFixedBar title="Duvet Zissou" />
      <div className="flex flex-col">
        <DuvetBanner />
        <DuvetProduct />
        <DuvetHowToDescribe />
        <DuvetInside />
        <TheSecret productName="Duvet Zissou" />
        <DuvetTechnical />
        <TryItFor100Days />
        <ZissouStores />
        <Partners color="#779ABF" />
      </div>
    </LoadingProvider>
  );
}
