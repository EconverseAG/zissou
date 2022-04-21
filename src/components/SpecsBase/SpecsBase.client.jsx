import {useState} from 'react';
import Slider from 'react-slick';
import {Image} from '@shopify/hydrogen';

import SelosBase from '../../assets/selos-base.png';
import ComparacaoBase from '../../assets/comparacao-base.png';

import * as styles from './SpecsBase.module.scss';

export default function SpecsBase() {
  const [nav, setNav] = useState();
  const [slider, setSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styles.wrapper} data-currentSlide={currentSlide}>
      <div className={styles.wrapperCenter}>
        <Slider
          asNavFor={slider}
          ref={(slider) => setNav(slider)}
          slidesToShow={4}
          focusOnSelect={true}
          arrows={false}
          className={styles.nav}
          beforeChange={(_, slide) => setCurrentSlide(slide)}
        >
          <span>
            Estrutura de
            <br /> madeira maciça
          </span>
          <span>
            Quanto mais
            <br /> ripas, melhor
          </span>
          <span>
            Design versátil
            <br /> minimalista
          </span>
          <span>
            Montagem por um <br />
            especialista do sono
          </span>
        </Slider>
        <Slider
          asNavFor={nav}
          ref={(slider) => setSlider(slider)}
          slidesToShow={1}
          arrows={false}
          dots={false}
          fade={true}
        >
          <div className={styles.contentSlide}>
            <div className={styles.contentSlideCols}>
              <div className={styles.contentSlideColsLeft}>
                <p>
                  A <strong>Base Zissou</strong> é superior a qualquer cama box
                  tradicional. A madeira de eucalipto de reflorestamento usada
                  em sua composição proporciona{' '}
                  <strong>
                    estabilidade, força, resistência e durabilidade
                  </strong>
                  , com pés de altíssima qualidade
                </p>
                <Image
                  src={SelosBase}
                  width={636}
                  height={156}
                  className={styles.imageSelosBase}
                />
              </div>
              <div className={styles.contentSlideColsRight}>
                <Image
                  src={ComparacaoBase}
                  width={611}
                  height={732}
                  className={styles.imageComparacaoBase}
                />
              </div>
            </div>
          </div>
          <div className={styles.contentSlide}>
            <p>
              A menor distância entre as ripas é fundamental e garante o melhor
              conforto dos colchões. A Base Zissou possui{' '}
              <strong>ripas de pinus com distância de apenas 5cm</strong>. Além
              disso, elas são envelopadas individualmente em material
              resistente, fazendo com que o colchão não escorregue e evitando os
              nhec nhecs indesejáveis
            </p>
          </div>
          <div className={styles.contentSlide}>
            <p>
              <strong>
                Linhas retas, bordas arredondas e revestimentos em tecido
                estofado com fibras volumosas de alta tecnologia, de cor neutra,
              </strong>{' '}
              que combina com qualquer ambiente. Possui{' '}
              <strong>altura total de 30cm</strong> para harmonizar com móveis
              de cabeceira.
            </p>
          </div>
          <div className={styles.contentSlide}>
            <p>
              Montar um móvel de qualidade é tarefa desafiadora. Não se
              preocupe! Para sua comodidade,{' '}
              <strong>
                a instalação da Base Zissou é feita por um especialista de forma
                rápida, prática e segura.
              </strong>
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
