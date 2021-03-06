import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';
import parseUrl from '../../../helpers/parseUrl';

import {Link, Image, Money} from '@shopify/hydrogen/client';

import * as styles from './SleepAndLiveComparativo.module.scss';

const ColchaoCoral = parseUrl('ColchaoCoralComparativo.png');
const ColchaoBlue = parseUrl('ColchaoBlueComparativo.png');
const ColchaoSpark = parseUrl('ColchaoSparkComparativo.png');

const ColchaoCoralHover = parseUrl('ColchaoCoralHover.png');
const ColchaoBlueHover = parseUrl('ColchaoBlueHover.png');
const ColchaoSparkHover = parseUrl('ColchaoSparkHover.png');

const LogoSpark = parseUrl('spark-logo.png');

export default function SleepAndLiveComparativo({coral, blue, spark}) {
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
            <p className={styles.SleepAndLiveFlag}>Novidade</p>
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
              ONDE TUDO COME??A
            </span>
            <p className={styles.SleepAndLiveText}>
              Spark combina{' '}
              <strong>
                mat??rias-primas de alta qualidade para estimular a sensa????o de
                bem-estar
              </strong>
            </p>
            <br />
            <p className={styles.SleepAndLiveText}>
              <strong>
                Op????o de suporte h??brido com molas Leggett & Platt
              </strong>{' '}
              de 12cm de altura
            </p>
            {spark && (
              <span className={styles.SleepAndLivePrice}>
                A partir de <Money data={spark?.priceRange?.minVariantPrice} />
              </span>
            )}
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.SleepAndLiveButtonCTA}
            >
              CONHE??A O SPARK
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
            to="/products/colchao-zissou-coral-original"
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
            A EVOLU????O DO SONO
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
            <strong>Op????o de suporte h??brido com molas Leggett & Platt</strong>{' '}
            de 15cm de altura
          </p>
          {coral && (
            <span className={styles.SleepAndLivePrice}>
              A partir de <Money data={coral?.priceRange?.minVariantPrice} />
            </span>
          )}
          <Link
            to="/products/colchao-zissou-coral-original"
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
            Mais <br /> avan??ado
          </p>
          <Link
            to="/products/colchao-zissou-blue"
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
              uma das tecnologias mais avan??adas em sono com mat??rias primas
              altamente sofisticadas
            </strong>
          </p>
          <br />
          <p className={styles.SleepAndLiveText}>
            <strong>
              Sistema de suporte h??brido com molas Leggett & Platt{' '}
            </strong>{' '}
            de 15cm de altura e zoneamento ergon??mico
          </p>
          {blue && (
            <span className={styles.SleepAndLivePrice}>
              A partir de <Money data={blue?.priceRange?.minVariantPrice} />
            </span>
          )}
          <Link
            to="/products/colchao-zissou-blue"
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
            <p className={styles.SleepAndLiveFlag}>Novidade</p>
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
              ONDE TUDO COME??A
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
                Op????o de suporte h??brido com molas Leggett & Platt
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
              CONHE??A O SPARK
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
