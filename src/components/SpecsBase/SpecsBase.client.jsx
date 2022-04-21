import {useState} from 'react';
import Slider from 'react-slick';
import {Image} from '@shopify/hydrogen';

import SelosBase from '../../assets/selos-base.png';
import SeloMontagemGratis from '../../assets/selo-montagem-gratis.png';
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
          className={styles.mainSlider}
        >
          <div className={styles.contentSlide}>
            <div className={styles.contentSlideCols}>
              <div className={styles.contentSlideColsLeft}>
                <p>
                  A <strong>Base Zissou</strong> é superior a qualquer cama box
                  <br />
                  tradicional. A madeira de eucalipto de
                  <br /> reflorestamento usada em sua composição
                  <br /> proporciona{' '}
                  <strong>
                    estabilidade, força, resistência e<br /> durabilidade
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
              A menor distância entre as ripas é fundamental e<br /> garante o
              melhor conforto dos colchões. A Base
              <br /> Zissou possui{' '}
              <strong>
                ripas de pinus com distância de
                <br /> apenas 5cm
              </strong>
              . Além disso, elas são envelopadas
              <br /> individualmente em material resistente, fazendo
              <br /> com que o colchão não escorregue e evitando os
              <br />
              nhec nhecs indesejáveis
            </p>
          </div>
          <div className={styles.contentSlide}>
            <p>
              <strong>
                Linhas retas, bordas arredondas
                <br /> e revestimentos em tecido estofado
                <br /> com fibras volumosas de alta tecnologia,
                <br /> de cor neutra,
              </strong>{' '}
              que combina com qualquer
              <br /> ambiente. Possui <strong>altura total de 30cm</strong> para
              <br /> harmonizar com móveis de cabeceira.
            </p>
          </div>
          <div className={styles.contentSlide}>
            <p>
              Montar um móvel de qualidade é tarefa
              <br /> desafiadora. Não se preocupe! Para sua
              <br /> comodidade,{' '}
              <strong>
                a instalação da Base Zissou
                <br /> é feita por um especialista de forma
                <br />
                rápida, prática e segura.
              </strong>
            </p>
            <Image
              src={SeloMontagemGratis}
              width={207}
              height={219}
              className={styles.imageSeloMontagemGratis}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
