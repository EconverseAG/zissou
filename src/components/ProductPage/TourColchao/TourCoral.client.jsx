import useMobile from '../../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import TourCoralPDP from '../../../assets/tour_coral_pdp.png';
import Legget from '../../../assets/selo-legget.png';

import * as styles from './TourColchao.module.scss';

import modalData from './TourCoralData';
import React, {useState} from 'react';
import StepCoralContent from './StepCoral.client';

export default function TourCoral() {
  const [modal, setModal] = useState();
  const {isMobile} = useMobile();

  return (
    <div className={styles.TourCoral}>
      <strong className={styles.TourCoralTitle}>TOUR DO CORAL</strong>
      <div className={styles.TourCoralContent}>
        {modal ? modal : null}
        <div>
          {modalData.map((modal) => (
            <StepCoralContent
              content={modal}
              key={modal.name}
              setModal={setModal}
            />
          ))}
          <Image
            src={TourCoralPDP}
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
