import {Image} from '@shopify/hydrogen';

import * as styles from './Klabin.module.scss';

import useMobile from '../../hooks/useMobile';

import KlabinFundo from '../../assets/klabin_fundo.png';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import FlorestaContent from './FlorestaModal';
import BiodiversidadeContent from './BiodiversidadeModal';
import ProducaoContent from './ProducaoModal';
import RelacaoSonoContent from './RelacaoSonoModal';
import PesquisaContent from './PesquisaModal';
import ProdutosContent from './ProdutosModal';
import ShippingContent from './ShippingModal';
import ImaginacaoContent from './ImaginacaoModal';

export default function Klabin() {
  const MySwal = withReactContent(Swal);

  const {isMobile} = useMobile();

  function handleBallClick(label) {
    const mappedContent = {
      floresta: {content: <FlorestaContent />, target: '#target-floresta'},
      biodiversidade: {
        content: <BiodiversidadeContent />,
        target: '#target-biodiversidade',
      },
      producao: {content: <ProducaoContent />, target: '#target-producao'},
      relacaoSono: {
        content: <RelacaoSonoContent />,
        target: '#target-relacaoSono',
      },
      pesquisa: {content: <PesquisaContent />, target: '#target-pesquisa'},
      produtos: {content: <ProdutosContent />, target: '#target-produtos'},
      shipping: {content: <ShippingContent />, target: '#target-shipping'},
      imaginacao: {
        content: <ImaginacaoContent />,
        target: '#target-imaginacao',
      },
    };

    MySwal.fire({
      html: mappedContent[label].content,
      customClass: {container: 'SWAL-container'},
      target: mappedContent[label].target,
      toast: true,
      showConfirmButton: false,
      showCloseButton: true,
    });
  }

  return (
    <div className={styles.KlabinContainer}>
      <strong className={styles.KlabinTitle}>
        DURMA DE CONSCIÊNCIA TRANQUILA <br /> PORQUE{' '}
        <p className={styles.KlabinOtherColorTitle}>#AQUITEMKLABIN</p>
      </strong>
      <div className={styles.KlabinVideo}>
        {isMobile ? (
          <iframe
            width="333"
            height="192"
            src="https://www.youtube.com/embed/L3HpWrsnDSM"
            title="YouTube video player"
            frameBrder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            width="756"
            height="435"
            src="https://www.youtube.com/embed/L3HpWrsnDSM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <span className={styles.KlabinSubtitle}>
        Todos os produtos Zissou chegam na sua casa com embalagens de papelão{' '}
        <br />
        ondulado de altíssima qualidade da Klabin, referência no mundo em
        sustentabilidade
      </span>
      <div className={styles.KlabinImage}>
        <Image src={KlabinFundo} width="1200" height="473" />
        <div className={styles.KlabinDots}>
          <div id="target-floresta">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('floresta')}
            ></button>
          </div>
          <div id="target-biodiversidade">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('biodiversidade')}
            ></button>
          </div>
          <div id="target-producao">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('producao')}
            ></button>
          </div>
          <div id="target-relacaoSono">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('relacaoSono')}
            ></button>
          </div>
          <div id="target-pesquisa">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('pesquisa')}
            ></button>
          </div>
          <div id="target-produtos">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('produtos')}
            ></button>
          </div>
          <div id="target-shipping">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('shipping')}
            ></button>
          </div>
          <div id="target-imaginacao">
            <button
              className="KlabinDot"
              onClick={() => handleBallClick('imaginacao')}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}


// aqui usaria o ClickAwayListener, existem varios compoentes prontos disso, um exenmplar: https://mui.com/pt/components/click-away-listener/
// Usaria tambem o Pooper, que funciona como um poopover, vc consegue pre posicionar ele direto no react, tiraria muita  coisa que vc fez em CSS
// Todos esses componentes de "...Modal.jsx" poderiam ser apenas um JSON em um arquivo separado, pois o layouyt é identico, so muda conteudo, usando o pooper com o awayListener, ficaria perfeito