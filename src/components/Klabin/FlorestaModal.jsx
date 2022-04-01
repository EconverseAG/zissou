import {Image} from '@shopify/hydrogen';

import Floresta from '../../assets/floresta-modal.png';

export default function FlorestaContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={Floresta} width="28" height="63" />
        <strong className="modal-top-title">
          ÁRVORES E <br /> MANEJO FLORESTAL
        </strong>
      </div>
      <span className="modal-bottom-text">
        Pioneira no manejo florestal que mescla florestas plantadas de pínus e
        eucalipto e matas nativas preservadas
      </span>
    </>
  );
}
