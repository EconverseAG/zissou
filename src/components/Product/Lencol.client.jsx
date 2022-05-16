import LencolProduct from '../LencolProduct/LencolProduct.client';
import LencolHowToDescribe from '../LencolHowToDescribe';
import LencolTechnical from '../LencolTechnical';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';
import TheSecret from '../TheSecret';
import LencolBanner from '../LencolBanner';
import {LoadingProvider} from '../../hooks/useLoading';

function Lencol() {
  return (
    <LoadingProvider>
      <div className="flex flex-col">
        <LencolBanner />
        <LencolProduct />
        <LencolHowToDescribe />
        <TheSecret productName="Lençol Zissou" />
        <LencolTechnical />
        <TryItFor100Days />
        <ZissouStores />
        <Partners color="#779ABF" />
      </div>
    </LoadingProvider>
  );
}

export default Lencol;
