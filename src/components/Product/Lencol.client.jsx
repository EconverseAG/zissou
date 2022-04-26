import LencolProduct from '../LencolProduct/LencolProduct.client';
import LencolHowToDescribe from '../LencolHowToDescribe';
import LencolTechnical from '../LencolTechnical';
import TryItFor100Days from '../TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';
import Partners from '../Partners/Partners.client';

function Lencol() {
  return (
    <div className="flex flex-col">
      <LencolProduct />
      <LencolHowToDescribe />
      <LencolTechnical />
      <TryItFor100Days />
      <ZissouStores />
      <Partners color="#779ABF" />
    </div>
  );
}

export default Lencol;
