import {Image} from '@shopify/hydrogen';

import RelacaoSono from '../../assets/RelacaoSono-modal.png';

export default function RelacaoSonoContent() {
  return (
    <>
      <div className="modal-top">
        <Image src={RelacaoSono} width="57" height="40" />
        <strong className="modal-top-title">
          REDEFININDO <br /> SUA RELAÇÃO <br /> COM O SONO
        </strong>
      </div>
      <span className="modal-bottom-text">
        Intimidade com o consumidor para entender seus comportamentos,
        necessidades e particularidades na hora de dormir
      </span>
    </>
  );
}
