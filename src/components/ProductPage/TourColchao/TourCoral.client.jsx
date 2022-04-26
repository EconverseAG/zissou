import {Image} from '@shopify/hydrogen';

import TourCoralPDP from '../../../assets/tour_coral_pdp.png';
import Legget from '../../../assets/selo-legget.png';

import * as styles from './TourColchao.module.scss';

import StepContent from './Step.client';

import modalData from './TourCoralData';
import React, {useState} from 'react';

export default function TourCoral() {
  const [modal, setModal] = useState();

  return (
    <div className={styles.TourCoral}>
      <strong className={styles.TourCoralTitle}>TOUR DO CORAL</strong>
      <div className={styles.TourCoralContent}>
        {modal ? modal : null}
        <div>
          {modalData.map((modal) => (
            <StepContent content={modal} key={modal.name} setModal={setModal} />
          ))}
          <Image src={TourCoralPDP} width={546} height={422} />
        </div>
        <Image src={Legget} width={115} height={89} className={styles.Legget} />
      </div>
    </div>
  );
}
