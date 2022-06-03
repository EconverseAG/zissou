import {useCallback, useState} from 'react';
import {Image} from '@shopify/hydrogen';

import SelosBase from '../../assets/selos-base.png';
import GifMontagem from '../../assets/base-montagem.gif';
import SeloMontagemGratis from '../../assets/selo-montagem-gratis.png';
import ComparacaoBase from '../../assets/comparacao-base.png';
import SecondContentBackground from '../../assets/base-background-second-slide.png';
import ThirdContentBackground from '../../assets/base-background-third-slide.png';

import * as styles from './SpecsBase.module.scss';

import useMobile from '../../hooks/useMobile';

export default function SpecsBase() {
  const [currentContent, setCurrentContent] = useState(0);

  const {isMobile} = useMobile();

  const handleContentChange = useCallback((index) => {
    setCurrentContent(index);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
      data-currentcontent={currentContent}
    >
      <div className={styles.nav}>
        <span
          className={currentContent === 0 ? styles.activeNav : ''}
          role="button"
          onClick={() => handleContentChange(0)}
          tabIndex={0}
        >
          Estrutura de
          <br /> madeira maciça
        </span>
        <span
          className={currentContent === 1 ? styles.activeNav : ''}
          role="button"
          onClick={() => handleContentChange(1)}
          tabIndex={-1}
        >
          Quanto mais
          <br /> ripas, melhor
        </span>
        <span
          className={currentContent === 2 ? styles.activeNav : ''}
          role="button"
          onClick={() => handleContentChange(2)}
          tabIndex={-2}
        >
          Design versátil
          <br /> minimalista
        </span>
        <span
          className={currentContent === 3 ? styles.activeNav : ''}
          role="button"
          onClick={() => handleContentChange(3)}
          tabIndex={-3}
        >
          Montagem por um <br />
          especialista do sono
        </span>
      </div>
      <div className={styles.contentWrapper}>
        {(currentContent === 0 && (
          <div className={styles.contentItem} data-tab="0">
            <div className={styles.contentItemCols}>
              <div className={styles.contentItemColsLeft}>
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
                  loading={'lazy'}
                />
              </div>
              <div className={styles.contentItemColsRight}>
                <Image
                  src={ComparacaoBase}
                  width={500}
                  height={600}
                  className={styles.imageComparacaoBase}
                  loading={'lazy'}
                />
              </div>
            </div>
          </div>
        )) ||
          (currentContent === 1 && (
            <>
              <div className={styles.contentItem} data-tab="1">
                <p>
                  A menor distância entre as ripas é fundamental e<br /> garante
                  o melhor conforto dos colchões. A Base
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
              <Image
                src={SecondContentBackground}
                width={1200}
                height={1333}
                className={styles.secondContentBackground}
                loading={'lazy'}
              />
            </>
          )) ||
          (currentContent === 2 && (
            <>
              <div className={styles.contentItem} data-tab="2">
                <p>
                  <strong>
                    Linhas retas, bordas arredondas
                    <br /> e revestimentos em tecido estofado
                    <br /> com fibras volumosas de alta tecnologia,
                    <br /> de cor neutra,
                  </strong>{' '}
                  que combina com qualquer
                  <br /> ambiente. Possui <strong>
                    altura total de 30cm
                  </strong>{' '}
                  para
                  <br /> harmonizar com móveis de cabeceira.
                </p>
              </div>
              <Image
                src={ThirdContentBackground}
                width={1581}
                height={488}
                className={styles.thirdContentBackground}
                loading={'lazy'}
              />
            </>
          )) ||
          (currentContent === 3 && (
            <div className={styles.contentItem} data-tab="3">
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
                loading={'lazy'}
              />
              <Image
                src={GifMontagem}
                width={850}
                height={521}
                className={styles.gifMontagem}
                loading={'lazy'}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
