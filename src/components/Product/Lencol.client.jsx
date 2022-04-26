import LencolProduct from '../LencolProduct/LencolProduct.client';
import LencolHowToDescribe from '../LencolHowToDescribe';

function Lencol() {
  return (
    <div className="flex flex-col">
      <LencolProduct />
      <LencolHowToDescribe />
    </div>
  );
}

export default Lencol;
