import {Link} from '@shopify/hydrogen';
import {useState, useRef, useEffect} from 'react';
import * as styles from './FamiliaZissou.module.scss';

let familiazissou_content = new Event('familiazissou_content');

export default function PopupContent({content}) {
  const [openModal, setOpenModal] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setOpenModal(false));

  const handleOpenModal = () => {
    if (!openModal) {
      document.dispatchEvent(familiazissou_content);
    }
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('familiazissou_content', () =>
      setOpenModal(false),
    );
    return () => {
      document.removeEventListener('familiazissou_content', () =>
        setOpenModal(false),
      );
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
          <strong className={styles.modalTitle}>{content.title}</strong>
          <Link to={content.link} className={styles.modalText}>
            CONFIRA
          </Link>
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
