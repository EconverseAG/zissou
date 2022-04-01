import {Image} from '@shopify/hydrogen';

import Pesquisa from '../../assets/Pesquisa-modal.png';

export default function PesquisaContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={Pesquisa} width="21" height="47" />
        <strong className="modal-top-title">
          PESQUISA E <br /> DESENVOLVIMENTO
        </strong>
      </div>
      <span className="modal-bottom-text">
        Design thinking junto com o consumidor, unindo qualidade, criatividade e
        alta tecnologia para aterrissar em produtos únicos de sono
      </span>
    </>
  );
}
