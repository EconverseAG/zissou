import {Image} from '@shopify/hydrogen';
import * as styles from './ZissouNaMidia.module.scss';

import Forbes from '../../assets/logo_Forbes.webp';
import StartSe from '../../assets/logo_StartSe.webp';
import Gol from '../../assets/logo_Gol.webp';
import Gq from '../../assets/logo_GQ.webp';
import ValorEconomico from '../../assets/logo_valor_economico.webp';

import useMobile from '../../hooks/useMobile';
import Slider from 'react-slick/lib/slider';

export default function ZissouNaMidia() {
  const {isMobile} = useMobile();

  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.MidiaContainer}>
      <Slider {...settings}>
        <div className={styles.slickContent}>
          <div>
            <div className={styles.firstMarks}>
              <SvgFirstMark />
            </div>
            <span>
              Os hotéis mais novos da grife Fasano (Angra dos Reis, Belo
              Horizonte e Salvador) aderiram aos colchões da marca, assim como o
              Belmond Cataratas do Iguaçu.
            </span>
            <div className={styles.lastMarks}>
              <SvgLastMark />
            </div>
          </div>
          <div>
            <Image
              src={Forbes}
              width={isMobile ? '150' : '230'}
              height={isMobile ? '93' : '173'}
              loading={'lazy'}
            />
          </div>
        </div>
        <div className={styles.slickContent}>
          <div>
            <div className={styles.firstMarks}>
              <SvgFirstMark />
            </div>
            <span>
              Dormir é muito importante para a manutenção de sua saúde – e é um
              dos aspectos que startups, como a Zissou, estão tentando melhorar
              para revolucionar este segmento e fazer com que as pessoas tenham
              vidas com condições melhores.
            </span>
            <div className={styles.lastMarks}>
              <SvgLastMark />
            </div>
          </div>
          <div>
            <Image
              src={StartSe}
              width={isMobile ? '200' : '256'}
              height={isMobile ? '117' : '173'}
              loading={'lazy'}
            />
          </div>
        </div>
        <div className={styles.slickContent}>
          <div>
            <div className={styles.firstMarks}>
              <SvgFirstMark />
            </div>
            <span>
              Nos últimos três anos, uma startup vem tirando o sono dos grandes
              fabricantes com um modelo tecnológico. Diga boa noite a Zissou,
              startup que ganhou o coração dos hotéis Fasano.
            </span>
            <div className={styles.lastMarks}>
              <SvgLastMark />
            </div>
          </div>
          <div>
            <Image
              src={Gq}
              width={isMobile ? '180' : '230'}
              height={isMobile ? '123' : '173'}
              loading={'lazy'}
            />
          </div>
        </div>
        <div className={styles.slickContent}>
          <div>
            <div className={styles.firstMarks}>
              <SvgFirstMark />
            </div>
            <span>
              A Zissou está provocando uma verdadeira revolução no setor por
              meio do conceito bed in box (cama na caixa). O colchão é
              armazenado numa embalagem que permite seu transporte com
              facilidade, diminuindo os custos de frete e simplificando a
              logística.
            </span>
            <div className={styles.lastMarks}>
              <SvgLastMark />
            </div>
          </div>
          <div>
            <Image
              src={ValorEconomico}
              width={isMobile ? '150' : '200'}
              height={isMobile ? '123' : '173'}
              loading={'lazy'}
            />
          </div>
        </div>
        <div className={styles.slickContent}>
          <div>
            <div className={styles.firstMarks}>
              <SvgFirstMark />
            </div>
            <span>
              Colabora para o sucesso da Zissou a solução criada pelos sócios
              para acabar com aquele momento constrangedor na hora de comprar um
              colchão que acontece na maioria das lojas. Quem quer experimentar
              o produto pode ir até uma das lojas testar a peça em um quarto
              privado e aconchegante, com iluminação e trilha sonora escolhidas
              pelo visitante.
            </span>
            <div className={styles.lastMarks}>
              <SvgLastMark />
            </div>
          </div>
          <div>
            <Image
              src={Gol}
              width={isMobile ? '140' : '180'}
              height={isMobile ? '133' : '173'}
              loading={'lazy'}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

function SvgFirstMark() {
  const {isMobile} = useMobile();

  return isMobile ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={72.689}
      height={52.068}
      viewBox="0 0 72.689 52.068"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Ret\xE2ngulo_73"
            data-name="Ret\xE2ngulo 73"
            width={72.689}
            height={52.068}
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Grupo_40" data-name="Grupo 40" clipPath="url(#clip-path)">
        <path
          id="Caminho_131"
          data-name="Caminho 131"
          d="M0,34.283C0,15.724,9.371,0,29.487,0l2.743,9.022q-18.514.773-19.2,17.785c5.486,1.031,9.828,6.445,9.828,12.63,0,7.218-5.257,12.631-10.972,12.631C3.886,52.068,0,46.139,0,34.283m40.458,0C40.458,15.724,49.83,0,69.945,0l2.743,9.022q-18.173.773-19.2,17.785c5.714,1.031,9.829,6.187,9.829,12.63,0,7.218-5.257,12.631-10.972,12.631-8,0-11.886-5.929-11.886-17.785"
          fill="#fff"
        />
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={146.753}
      height={105.121}
      viewBox="0 0 146.753 105.121"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Ret\xE2ngulo_51"
            data-name="Ret\xE2ngulo 51"
            width={146.753}
            height={105.121}
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Grupo_44" data-name="Grupo 44" clipPath="url(#clip-path)">
        <path
          id="Caminho_130"
          data-name="Caminho 130"
          d="M0,69.214C0,31.745,18.92,0,59.531,0l5.537,18.214Q27.689,19.775,26.3,54.121C37.38,56.2,46.147,67.133,46.147,79.621c0,14.572-10.614,25.5-22.151,25.5-16.152,0-24-11.97-24-35.907m81.682,0C81.682,31.745,100.6,0,141.214,0l5.539,18.214q-36.69,1.56-38.766,35.907c11.537,2.081,19.844,12.49,19.844,25.5,0,14.572-10.614,25.5-22.152,25.5-16.151,0-24-11.97-24-35.907"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

function SvgLastMark() {
  const {isMobile} = useMobile();
  return isMobile ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72.689}
      height={52.068}
      viewBox="0 0 72.689 52.068"
    >
      <path
        id="Caminho_140"
        data-name="Caminho 140"
        d="M0,34.283C0,15.724,9.371,0,29.487,0l2.743,9.022q-18.514.773-19.2,17.785c5.486,1.031,9.828,6.445,9.828,12.63,0,7.218-5.257,12.631-10.972,12.631C3.886,52.068,0,46.139,0,34.283m40.458,0C40.458,15.724,49.83,0,69.945,0l2.743,9.022q-18.173.773-19.2,17.785c5.714,1.031,9.829,6.187,9.829,12.63,0,7.218-5.257,12.631-10.972,12.631-8,0-11.886-5.929-11.886-17.785"
        transform="translate(72.689 52.068) rotate(180)"
        fill="#fff"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={146.753}
      height={105.121}
      viewBox="0 0 146.753 105.121"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Ret\xE2ngulo_52"
            data-name="Ret\xE2ngulo 52"
            width={146.753}
            height={105.121}
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Grupo_45" data-name="Grupo 45" clipPath="url(#clip-path)">
        <path
          id="Caminho_131"
          data-name="Caminho 131"
          d="M146.753,69.214C146.753,31.744,127.833,0,87.221,0L81.684,18.214q37.379,1.56,38.764,35.907c-11.075,2.081-19.843,13.011-19.843,25.5,0,14.572,10.614,25.5,22.151,25.5,16.152,0,24-11.97,24-35.907m-81.682,0C65.07,31.744,46.149,0,5.539,0L0,18.214q36.69,1.56,38.766,35.907c-11.537,2.081-19.844,12.49-19.844,25.5,0,14.572,10.614,25.5,22.152,25.5,16.151,0,24-11.97,24-35.907"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
