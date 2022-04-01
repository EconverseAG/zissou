import {Image} from '@shopify/hydrogen';

import Biodiversidade from '../../assets/biodiversidade-modal.png';

export default function BiodiversidadeContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={Biodiversidade} width="50" height="38" />
        <strong className="modal-top-title">
          PROTEÇÃO DA <br /> BIODIVERSIDADE <br /> E COMUNIDADE
        </strong>
      </div>
      <span className="modal-bottom-text">
        Pesquisa e conservação da fauna e da flora, e apoio à saúde, educação,
        meio ambiente e esportes nas comunidades locais
      </span>
    </>
  );
}
