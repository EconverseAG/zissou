import {Image} from '@shopify/hydrogen';

import Producao from '../../assets/Producao-modal.png';

export default function ProducaoContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={Producao} width="46" height="32" />
        <strong className="modal-top-title">
          PRODUÇÃO <br /> E LOGÍSTICA
        </strong>
      </div>
      <span className="modal-bottom-text">
        Mundialmente conhecida pela eficiência operacional com manejo florestal
        sustentável, produção de celulose e papel e fabricação das embalagens
      </span>
    </>
  );
}
