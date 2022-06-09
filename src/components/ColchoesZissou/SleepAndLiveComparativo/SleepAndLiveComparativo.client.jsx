import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './SleepAndLiveComparativo.module.scss';

import ColchaoCoral from '../../../assets/ColchaoCoralComparativo.png';
import ColchaoBlue from '../../../assets/ColchaoBlueComparativo.png';
import ColchaoSpark from '../../../assets/ColchaoSparkComparativo.png';

import ColchaoCoralHover from '../../../assets/ColchaoCoralHover.png';
import ColchaoBlueHover from '../../../assets/ColchaoBlueHover.png';
import ColchaoSparkHover from '../../../assets/ColchaoSparkHover.png';

import LogoSpark from '../../../assets/spark-logo.png';

export default function SleepAndLiveComparativo() {
  const [changeUrlCoral, setChangeUrlCoral] = useState(ColchaoCoral);
  const [changeUrlBlue, setChangeUrlBlue] = useState(ColchaoBlue);
  const [changeUrlSpark, setChangeUrlSpark] = useState(ColchaoSpark);

  const {isMobile} = useMobile();

  function handleImageEnterCoral() {
    setChangeUrlCoral(ColchaoCoralHover);
  }

  function handleImageEnterBlue() {
    setChangeUrlBlue(ColchaoBlueHover);
  }

  function handleImageLeaveCoral() {
    setChangeUrlCoral(ColchaoCoral);
  }

  function handleImageLeaveBlue() {
    setChangeUrlBlue(ColchaoBlue);
  }

  function handleImageLeaveSpark() {
    setChangeUrlSpark(ColchaoSpark);
  }

  function handleImageEnterSpark() {
    setChangeUrlSpark(ColchaoSparkHover);
  }

  return (
    <div className={styles.SleepAndLiveContainer}>
      <span className={styles.SleepAndLiveContainerTitle}>Dormir & Viver</span>
      <div className={styles.SleepAndLiveContent}>
        {!isMobile && (
          <div
            onMouseEnter={handleImageEnterSpark}
            onMouseLeave={handleImageLeaveSpark}
            className={`${styles.SleepAndLiveColchao} ${styles.SleepAndLiveSpark}`}
          >
            <p className={styles.SleepAndLiveFlag}>Pré - venda</p>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.SleepAndLiveCTAImage}
            >
              <Image
                src={changeUrlSpark}
                width={isMobile ? '304' : '350'}
                height={isMobile ? '154' : '185'}
                style={{height: isMobile ? '154px' : '185px'}}
              />
            </Link>
            <Image
              src={LogoSpark}
              width={114}
              height={37}
              className={styles.SleepAndLiveTitle}
            />
            <span className={styles.SleepAndLiveSubtitle}>
              ONDE TUDO COMEÇA
            </span>
            <p className={styles.SleepAndLiveText}>
              Spark combina{' '}
              <strong>
                matérias-primas de alta qualidade para estimular a sensação de
                bem-estar
              </strong>
            </p>
            <br />
            <p className={styles.SleepAndLiveText}>
              <strong>
                Opção de suporte híbrido com molas Leggett & Platt
              </strong>{' '}
              de 12cm de altura
            </p>
            <span className={styles.SleepAndLivePrice}>
              A partir de R$ 2.990
            </span>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.SleepAndLiveButtonCTA}
            >
              CONHEÇA O SPARK
            </Link>
          </div>
        )}
        <div
          onMouseEnter={handleImageEnterCoral}
          onMouseLeave={handleImageLeaveCoral}
          className={`${styles.SleepAndLiveColchao} ${styles.SleepAndLiveCoral}`}
        >
          <p className={styles.SleepAndLiveFlag}>
            Mais <br /> vendido
          </p>
          <Link
            to="/products/colchao-zissou-coral-original-newurl"
            className={styles.SleepAndLiveCTAImage}
          >
            <Image
              src={changeUrlCoral}
              width={isMobile ? '304' : '350'}
              height={isMobile ? '154' : '185'}
              style={{height: isMobile ? '154px' : '185px'}}
            />
          </Link>
          <strong className={styles.SleepAndLiveTitle}>CORAL</strong>
          <span className={styles.SleepAndLiveSubtitle}>
            A EVOLUÇÃO DO SONO
          </span>
          <p className={styles.SleepAndLiveText}>
            Coral consolida materiais premium para atingir um{' '}
            <strong>
              mix perfeito de suporte, conforto e aconchego com tecido
              refrescante Soft & Chill
            </strong>
          </p>
          <br />
          <p className={styles.SleepAndLiveText}>
            <strong>Opção de suporte híbrido com molas Leggett & Platt</strong>{' '}
            de 15cm de altura
          </p>
          <span className={styles.SleepAndLivePrice}>A partir de R$ 4.990</span>
          <Link
            to="/products/colchao-zissou-coral-original-newurl"
            className={styles.SleepAndLiveButtonCTA}
          >
            EXPLORE O CORAL
          </Link>
        </div>
        <div
          onMouseEnter={handleImageEnterBlue}
          onMouseLeave={handleImageLeaveBlue}
          className={`${styles.SleepAndLiveColchao} ${styles.SleepAndLiveBlue}`}
        >
          <p className={styles.SleepAndLiveFlag}>
            Mais <br /> avançado
          </p>
          <Link
            to="/products/colchao-zissou-blue-newurl"
            className={styles.SleepAndLiveCTAImage}
          >
            <Image
              src={changeUrlBlue}
              width={isMobile ? '304' : '350'}
              height={isMobile ? '154' : '185'}
              style={{height: isMobile ? '154px' : '185px'}}
            />
          </Link>
          <strong className={styles.SleepAndLiveTitle}>Blue</strong>
          <span className={styles.SleepAndLiveSubtitle}>
            LIBERTE SEUS SONHOS
          </span>
          <p className={styles.SleepAndLiveText}>
            Blue possui{' '}
            <strong>
              uma das tecnologias mais avançadas em sono com matérias primas
              altamente sofisticadas
            </strong>
          </p>
          <br />
          <p className={styles.SleepAndLiveText}>
            <strong>
              Sistema de suporte híbrido com molas Leggett & Platt{' '}
            </strong>{' '}
            de 15cm de altura e zoneamento ergonômico
          </p>
          <span className={styles.SleepAndLivePrice}>
            A partir de R$ 10.990
          </span>
          <Link
            to="/products/colchao-zissou-blue-newurl"
            className={styles.SleepAndLiveButtonCTA}
          >
            MERGULHE NO BLUE
          </Link>
        </div>
        {isMobile && (
          <div
            onMouseEnter={handleImageEnterSpark}
            onMouseLeave={handleImageLeaveSpark}
            className={`${styles.SleepAndLiveColchao} ${styles.SleepAndLiveSpark}`}
          >
            <p className={styles.SleepAndLiveFlag}>Pré - venda</p>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.SleepAndLiveCTAImage}
            >
              <Image
                src={changeUrlSpark}
                width={isMobile ? '304' : '350'}
                height={isMobile ? '154' : '185'}
                style={{height: isMobile ? '154px' : '185px'}}
              />
            </Link>
            <Image
              src={LogoSpark}
              width={79}
              height={25}
              className={styles.SleepAndLiveTitle}
            />
            <span className={styles.SleepAndLiveSubtitle}>
              ONDE TUDO COMEÇA
            </span>
            <p className={styles.SleepAndLiveText}>
              Spark consolida materiais premium para atingir um{' '}
              <strong>
                mix perfeito de suporte, conforto e aconchego com tecido
                refrescante Velvet & Balanced
              </strong>
            </p>
            <br />
            <p className={styles.SleepAndLiveText}>
              <strong>
                Opção de suporte híbrido com molas Leggett & Platt
              </strong>
              de 12cm de altura
            </p>
            <span className={styles.SleepAndLivePrice}>
              A partir de R$ 2.990
            </span>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.SleepAndLiveButtonCTA}
            >
              CONHEÇA O SPARK
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
