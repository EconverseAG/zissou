import {useState, useRef, useEffect, memo} from 'react';

import useMobile from '../../../hooks/useMobile';

import * as styles from './TourColchao.module.scss';

import {Image} from '@shopify/hydrogen';

let step_content = new Event('step_content');

import modalData from './TourCoralData';

function StepCoralContent({content, setModal}) {
  const {isMobile} = useMobile();
  const [openModal, setOpenModal] = useState(false);
  const wrapperRef = useRef(null);

  const nextModal = () => {
    const indexOnClick = modalData.findIndex((item) => {
      return (
        item.modal.title == document.querySelector('#modalTitle').innerHTML
      );
    });

    const newContent = modalData[indexOnClick + 1] || modalData[0];

    if (indexOnClick < modalData.length - 1) {
      setModal(<ModalContent modalContent={newContent} />);
    } else {
      setModal(<ModalContent modalContent={modalData[0]} />);
    }
  };

  const ModalContent = ({modalContent = content}) => (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.modalTop}>
          <strong
            className={styles.modalTopTitle}
            id="modalTitle"
            dangerouslySetInnerHTML={{__html: modalContent.modal.title}}
          />
          <Image
            src={modalContent.modal.imageTitle}
            width={modalContent.modal.width}
            height={modalContent.modal.height}
          />
          <button onClick={CloseModal} className={styles.closeButton}>
            <CloseButton />
          </button>
        </div>
        <span
          className={styles.modalBottomText}
          dangerouslySetInnerHTML={{__html: modalContent.modal.text}}
        />
        <span
          tabIndex={-1}
          role="button"
          onClick={nextModal}
          className={styles.nextStep}
        >
          {modalContent.modal.buttonText}
        </span>
      </div>
      <Image
        src={modalContent.imageSrc}
        width={isMobile ? 375 : 1980}
        height={isMobile ? 300 : 1080}
        loading={'lazy'}
      />
    </div>
  );

  const handleOpenModal = () => {
    if (!openModal) {
      document.dispatchEvent(step_content);
    }

    setModal((prev) => (prev ? null : <ModalContent />));
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('step_content', () => {
      setModal(null);
    });
    return () => {
      document.removeEventListener('step_content', () => {
        setModal(null);
      });
    };
  }, [setModal]);

  const CloseModal = () => {
    setModal(null);
  };

  return (
    <>
      <div
        className={styles.TourCoralButtons}
        ref={openModal ? wrapperRef : null}
      >
        <button className={styles.TourCoralButton} onClick={handleOpenModal}>
          <strong
            dangerouslySetInnerHTML={{__html: content.title}}
            className={styles.TourCoralButtonTitle}
          />
          <span className={styles.TourCoralButtonCTA} />
        </button>
      </div>
    </>
  );
}

function CloseButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10.707}
      height={10.707}
      viewBox="0 0 10.707 10.707"
    >
      <g
        id="Grupo_46"
        data-name="Grupo 46"
        transform="translate(-1071.146 -2556.146)"
      >
        <line
          id="Linha_8"
          data-name="Linha 8"
          x2={10}
          y2={10}
          transform="translate(1071.5 2556.5)"
          fill="none"
          stroke="#707070"
          strokeWidth={1}
        />
        <line
          id="Linha_9"
          data-name="Linha 9"
          x1={10}
          y2={10}
          transform="translate(1071.5 2556.5)"
          fill="none"
          stroke="#707070"
          strokeWidth={1}
        />
      </g>
    </svg>
  );
}

export default memo(StepCoralContent, (prevProps, nextProps) => {
  return prevProps.content.title === nextProps.content.title;
});
