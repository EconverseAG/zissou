import LencolProduct from '../LencolProduct/LencolProduct.client';
import LencolHowToDescribe from '../LencolHowToDescribe';
import LencolTechnical from '../LencolTechnical';

function Lencol() {
  return (
    <div className="flex flex-col">
      <LencolProduct />
      <LencolHowToDescribe />
      <LencolTechnical />
    </div>
  );
}

export default Lencol;
