import {Image} from '@shopify/hydrogen';

import Imaginacao from '../../assets/Imaginacao-modal.png';

export default function ImaginacaoContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={Imaginacao} width="26" height="44" />
        <strong className="modal-top-title">
          USE SUA <br /> IMAGINAÇÃO
        </strong>
      </div>
      <span className="modal-bottom-text">
        Aproveite ao máximo a sua experiência de unboxing e durma de consciência
        tranquila porque #AquiTemKlabin
      </span>
    </>
  );
}
