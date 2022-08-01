import React, {useEffect, useMemo, useState} from 'react';
import Slider from 'react-slick/lib/slider';

import TimeComparisonCard from './TimeComparisonCard';
import useMobile from '../../../hooks/useMobile';

import * as styles from './WhatCanYouDo.module.scss';
import parseUrl from '../../../helpers/parseUrl';

const IconMarathon = parseUrl('icon-marathon.png');
const IconClockWork = parseUrl('icon-clock-work.png');
const IconApollo = parseUrl('icon-apollo-11.png');
const IconElevator = parseUrl('icon-elevator.png');
const IconFriends = parseUrl('icon-friends.png');
const IconBeatles = parseUrl('icon-beatles.png');

function WhatCanYouDo() {
  const [windowSize, setWindowSize] = useState();

  const {isMobile} = useMobile();

  useEffect(() => {
    setWindowSize(window?.innerWidth);
  }, []);

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: isMobile
        ? 1
        : windowSize < 1800
        ? windowSize < 1400
          ? 2
          : 3
        : 4,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '75px',
    }),
    [windowSize, isMobile],
  );

  return (
    <>
      <h2 style={{maxWidth: isMobile ? '320px' : 'initial'}}>
        O que mais você pode fazer em <strong>100 dias?</strong>
      </h2>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <TimeComparisonCard
            image={IconClockWork}
            imageWidth={82}
            imageHeight={89}
          >
            <strong>ESCREVER O LIVRO</strong> Laranja Mecânica{' '}
            <strong>4 vezes</strong>, se você for Anthony Burgess
          </TimeComparisonCard>
          <TimeComparisonCard
            image={IconApollo}
            imageWidth={84}
            imageHeight={84}
          >
            <strong>33 JORNADAS</strong> da Terra para a Lua no Apollo 11
          </TimeComparisonCard>
          <TimeComparisonCard
            image={IconElevator}
            imageWidth={121}
            imageHeight={150}
          >
            Subir de elevador <strong>160 ANDARES</strong> do Burj Khalifa,
            prédio mais alto do mundo, <strong>144000</strong>
          </TimeComparisonCard>
          <TimeComparisonCard
            image={IconFriends}
            imageWidth={91}
            imageHeight={108}
          >
            Assistir <strong>TODAS AS TEMPORADAS</strong> de Friends pelo menos
            19 vezes
          </TimeComparisonCard>
          <TimeComparisonCard
            image={IconBeatles}
            imageWidth={112}
            imageHeight={47}
          >
            <strong>OUVIR A DISCOGRAFIA</strong> completa dos Beatles{' '}
            <strong>141 vezes</strong>
          </TimeComparisonCard>
          <TimeComparisonCard
            image={IconMarathon}
            imageWidth={74}
            imageHeight={104}
          >
            Correr <strong>1199 Maratonas</strong>, se você for o recordista
            Eliud Kipchoge
          </TimeComparisonCard>
        </Slider>
      </div>

      <span className={`${styles.subtext} ${isMobile ? styles.mobile : ''}`}>
        Melhor relaxar e dormir gostoso em um Zissou
      </span>
    </>
  );
}

export default WhatCanYouDo;
