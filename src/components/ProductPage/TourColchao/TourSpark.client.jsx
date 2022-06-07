import useMobile from '../../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import TourSparkPDP from '../../../assets/tour-spark.png';

import * as styles from './TourColchao.module.scss';

import modalData from './TourSparkData';
import React, {useState} from 'react';
import StepSparkContent from './StepSpark.client';

export default function TourSpark() {
  const [modal, setModal] = useState();
  const {isMobile} = useMobile();

  return (
    <div
      className={styles.TourSpark}
      style={{
        height: isMobile && !modal && 'auto',
        padding: isMobile && !modal && '33px 0',
      }}
    >
      <strong className={styles.TourSparkTitle}>TOUR DO SPARK</strong>
      <div className={styles.TourSparkContent}>
        {modal ? modal : null}
        <div>
          {modalData.map((modal) => (
            <StepSparkContent
              key={modal.title}
              content={modal}
              setModal={setModal}
            />
          ))}
          <Image
            src={TourSparkPDP}
            width={isMobile ? 302 : 546}
            height={isMobile ? 234 : 422}
            loading={'lazy'}
          />
        </div>
      </div>
    </div>
  );
}
