import useMobile from '../../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';
import parseUrl from '../../../helpers/parseUrl';

const TourCoralPDP = parseUrl('tour_coral_pdp.png');

import * as styles from './TourColchao.module.scss';

import modalData from './TourCoralData';
import React, {useState} from 'react';
import StepCoralContent from './StepCoral.client';

export default function TourCoral() {
  const [modal, setModal] = useState();
  const {isMobile} = useMobile();

  return (
    <div
      className={styles.TourCoral}
      style={{
        height: isMobile && !modal && 'auto',
        padding: isMobile && !modal && '33px 0',
      }}
    >
      <strong className={styles.TourCoralTitle}>TOUR DO CORAL</strong>
      <div className={styles.TourCoralContent}>
        {modal ? modal : null}
        <div>
          {modalData.map((modal) => (
            <StepCoralContent
              key={modal.title}
              content={modal}
              setModal={setModal}
            />
          ))}
          <Image
            src={TourCoralPDP}
            width={isMobile ? 302 : 546}
            height={isMobile ? 234 : 422}
            loading={'lazy'}
          />
        </div>
      </div>
    </div>
  );
}
