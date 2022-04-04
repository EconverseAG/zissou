import {useState, useRef, useEffect} from 'react';
import * as styles from '../Klabin/Klabin.module.scss';

import {Image} from '@shopify/hydrogen';

let popup_content = new Event('popup_content');

export default function PopupContent({content}) {
  const [openModal, setOpenModal] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setOpenModal(false));

  const handleOpenModal = () => {
    if (!openModal) {
      document.dispatchEvent(popup_content);
    }
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('popup_content', () => setOpenModal(false));
    return () => {
      document.removeEventListener('popup_content', () => setOpenModal(false));
    };
  }, []);

  return (
    <div
      className={`${styles.target} ${content.name.toLowerCase()}`}
      ref={openModal ? wrapperRef : null}
    >
      <button
        className={styles.buttonOpenModal}
        onClick={handleOpenModal}
      ></button>
      {openModal ? (
        <div className={styles.modalContainer}>
          <div className={styles.modalTop} key={content.name}>
            <Image
              src={content.imageSrc}
              width={content.widthImg}
              height={content.heightImg}
            />
            <strong
              className={styles.modalTopTitle}
              dangerouslySetInnerHTML={{__html: content.title}}
            />
          </div>
          <span className={styles.modalBottomText}>{content.text}</span>
        </div>
      ) : null}
    </div>
  );
}

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
}
