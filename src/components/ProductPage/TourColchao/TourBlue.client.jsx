import React, {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import TourBluePDP from '../../../assets/tour_blue_pdp.png';

import * as styles from './TourColchao.module.scss';

import StepContent from './StepBlue.client';

import modalData from './TourBlueData';

export default function TourBlue() {
  const [modal, setModal] = useState();
  const {isMobile} = useMobile();

  return (
    <div
      className={styles.TourBlue}
      style={{
        height: isMobile && !modal && 'auto',
        padding: isMobile && !modal && '33px 0',
      }}
    >
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
            loading={'lazy'}
          />
        </div>
      </div>
    </div>
  );
}
