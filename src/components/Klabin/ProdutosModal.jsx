import {Image} from '@shopify/hydrogen';

import Produtos from '../../assets/Produtos-modal.png';

export default function ProdutosContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={Produtos} width="60" height="38" />
        <strong className="modal-top-title">
          PRODUTOS <br /> IDEAIS DE SONO
        </strong>
      </div>
      <span className="modal-bottom-text">
        Convergência em produtos campeões de cada categoria de sono, feitos com
        as melhores matérias primas do mundo
      </span>
    </>
  );
}
