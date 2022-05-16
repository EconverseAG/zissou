import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './SleepAndLiveComparativo.module.scss';

import ColchaoCoral from '../../../assets/ColchaoCoralComparativo.png';
import ColchaoBlue from '../../../assets/ColchaoBlueComparativo.png';

import ColchaoCoralHover from '../../../assets/ColchaoCoralHover.png';
import ColchaoBlueHover from '../../../assets/ColchaoBlueHover.png';

export default function SleepAndLiveComparativo() {
  const [changeUrlCoral, setChangeUrlCoral] = useState(ColchaoCoral);
  const [changeUrlBlue, setChangeUrlBlue] = useState(ColchaoBlue);
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

  return (
    <div className={styles.SleepAndLiveContainer}>
      <span className={styles.SleepAndLiveContainerTitle}>Dormir & Viver</span>
      <div className={styles.SleepAndLiveContent}>
        <div
          onMouseEnter={handleImageEnterCoral}
          onMouseLeave={handleImageLeaveCoral}
          className={[
            styles.SleepAndLiveColchao,
            styles.SleepAndLiveCoral,
          ].join(' ')}
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
              width={isMobile ? '304' : '572'}
              height={isMobile ? '154' : '302'}
            />
          </Link>
          <strong className={styles.SleepAndLiveTitle}>CORAL</strong>
          <span className={styles.SleepAndLiveSubtitle}>
            A EVOLUÇÃO DO SONO
          </span>
          <p className={styles.SleepAndLiveText}>
            Coral consolida materiais premium para atingir{' '}
            <strong>um mix perfeito de suporte, conforto e aconchego</strong>
          </p>
          <br />
          <p className={styles.SleepAndLiveText}>
            <strong>Opção de suporte híbrido com molas Leggett & Platt</strong>{' '}
            de 15cm de altura
          </p>
          <span className={styles.SleepAndLivePrice}>A partir de R$ 3.610</span>
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
          className={[styles.SleepAndLiveColchao, styles.SleepAndLiveBlue].join(
            ' ',
          )}
        >
          <p className={styles.SleepAndLiveFlag}>
            Mais <br /> avançado
          </p>
          <Link
            to="/products/colchao-zissou-blue"
            className={styles.SleepAndLiveCTAImage}
          >
            <Image
              src={changeUrlBlue}
              width={isMobile ? '304' : '572'}
              height={isMobile ? '154' : '302'}
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
            , incluindo látex Pulse e Ultra Cooling no tecido
          </p>
          <br />
          <p className={styles.SleepAndLiveText}>
            <strong>Opção de suporte híbrido com molas Leggett & Platt</strong>{' '}
            de 15cm de altura
          </p>
          <span className={styles.SleepAndLivePrice}>A partir de R$ 8.930</span>
          <Link
            to="/products/colchao-zissou-blue"
            className={styles.SleepAndLiveButtonCTA}
          >
            MERGULHE NO BLUE
          </Link>
        </div>
      </div>
    </div>
  );
}
