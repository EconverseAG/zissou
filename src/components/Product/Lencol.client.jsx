import LencolProduct from '../LencolProduct/LencolProduct.client';
import LencolHowToDescribe from '../LencolHowToDescribe';
import LencolTechnical from '../LencolTechnical';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';
import LencolTheSecret from '../LencolTheSecret';
import LencolBanner from '../LencolBanner';

function Lencol() {
  return (
    <div className="flex flex-col">
      <LencolBanner />
      <LencolProduct />
      <LencolHowToDescribe />
      <LencolTheSecret />
      <LencolTechnical />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color="#779ABF" />
    </div>
  );
}

export default Lencol;
