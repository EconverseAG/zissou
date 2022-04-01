import {Image} from '@shopify/hydrogen';

import Shipping from '../../assets/Shipping-modal.png';

export default function ShippingContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={Shipping} width="38" height="47" />
        <strong className="modal-top-title">
          CHEGANDO <br /> NA SUA CASA
        </strong>
      </div>
      <span className="modal-bottom-text">
        Produtos ideais de sono entregues em embalagens incrivelmente práticas,
        inovadoras, super-resistentes e sustentáveis
      </span>
    </>
  );
}
