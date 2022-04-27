import React, {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import TourBluePDP from '../../../assets/tour_blue_pdp.png';
import Legget from '../../../assets/selo-legget.png';

import * as styles from './TourColchao.module.scss';

import StepContent from './StepBlue.client';

import modalData from './TourBlueData';

export default function TourBlue() {
  const [modal, setModal] = useState();
  const {isMobile} = useMobile();

  return (
    <div className={styles.TourBlue}>
      <strong className={styles.TourBlueTitle}>TOUR DO BLUE</strong>
      <div className={styles.TourBlueContent}>
        {modal ? modal : null}
        <div>
          {modalData.map((modal) => (
            <StepContent content={modal} key={modal.name} setModal={setModal} />
          ))}
          <Image
            src={TourBluePDP}
            width={isMobile ? 302 : 546}
            height={isMobile ? 234 : 422}
          />
        </div>
        <Image
          src={Legget}
          width={isMobile ? 59 : 115}
          height={isMobile ? 46 : 89}
          className={styles.Legget}
        />
      </div>
    </div>
  );
}
