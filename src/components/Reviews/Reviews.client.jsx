import {useState, useEffect, useRef, useCallback} from 'react';

import Slider from 'react-slick/lib/slider';
import * as styles from './Reviews.module.scss';

import useMobile from '../../hooks/useMobile';

export default function Reviews() {
  const {isMobile} = useMobile();

  const SLIDES_TO_SHOW = isMobile ? 1 : 3;
  const [firstView, setFirstView] = useState(1);
  const [lastView, setLastView] = useState(SLIDES_TO_SHOW);
  const sliderRef = useRef(null);

  const [reviewData, setReviewData] = useState([]);

  const shuffle = useCallback((array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  useEffect(() => {
    fetch(
      `https://cdn.shopify.com/s/files/1/1526/6199/t/95/assets/ZissouStoreReviews.json`,
    )
      .then((res) => res.json())
      .then((res) => {
        setReviewData(shuffle(res.reviews.slice(0, 85)));
      });
  }, [shuffle]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: SLIDES_TO_SHOW,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  function handleIndex(a, index) {
    const current_index = index + 1;
    const last_index = SLIDES_TO_SHOW + index;

    if (last_index > reviewData.length) {
      setFirstView(1);
      setLastView(SLIDES_TO_SHOW);

      try {
        throw 'Erro proposital: não mexer';
      } catch (e) {
        sliderRef.current.slickGoTo(0);
        throw e;
      }
    }

    setFirstView(current_index);
    setLastView(last_index);
  }

  return (
    <div className={styles.ReviewsContainer}>
      <strong className={styles.ReviewsTitle}>
        O QUE ESTÃO FALANDO SOBRE A GENTE?
      </strong>
      <Slider ref={sliderRef} {...settings} beforeChange={handleIndex}>
        {reviewData.map((review, index) => (
          <div className={styles.ReviewsItem} key={index}>
            <strong className={styles.ReviewsItemName}>
              {review.customer.name}
            </strong>
            <span className={styles.ReviewsItemCity}>
              {review.customer.location}
            </span>
            <span
              className={styles.ReviewsItemDesc}
              dangerouslySetInnerHTML={{__html: review.content.testimonial}}
            />
            <Stars />
          </div>
        ))}
      </Slider>
      <span className={styles.ReviewCount}>
        Mostrando
        <p>
          {isMobile ? null : ` ${firstView} -`} {lastView} de{' '}
          {reviewData.length}
        </p>{' '}
        REVIEWS
      </span>
    </div>
  );
}

function Stars() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={101}
      height={18}
      viewBox="0 0 101 18"
      className={styles.Stars}
    >
      <g id="Grupo_9" data-name="Grupo 9" transform="translate(0.166 -0.023)">
        <path
          id="Pol\xEDgono_1"
          data-name="Pol\xEDgono 1"
          d="M9,0l3.15,5.391L18,6.875l-3.9,4.816L14.562,18,9,15.585,3.438,18,3.9,11.691,0,6.875,5.85,5.391Z"
          transform="translate(-0.166 0.023)"
          fill="#9873ac"
        />
        <path
          id="Pol\xEDgono_4"
          data-name="Pol\xEDgono 4"
          d="M9,0l3.15,5.391L18,6.875l-3.9,4.816L14.562,18,9,15.585,3.438,18,3.9,11.691,0,6.875,5.85,5.391Z"
          transform="translate(41.834 0.023)"
          fill="#9873ac"
        />
        <path
          id="Pol\xEDgono_2"
          data-name="Pol\xEDgono 2"
          d="M8.5,0l2.975,5.391L17,6.875l-3.686,4.816L13.753,18,8.5,15.585,3.247,18l.44-6.309L0,6.875,5.525,5.391Z"
          transform="translate(20.834 0.023)"
          fill="#9873ac"
        />
        <path
          id="Pol\xEDgono_3"
          data-name="Pol\xEDgono 3"
          d="M8.5,0l2.975,5.391L17,6.875l-3.686,4.816L13.753,18,8.5,15.585,3.247,18l.44-6.309L0,6.875,5.525,5.391Z"
          transform="translate(62.834 0.023)"
          fill="#9873ac"
        />
        <path
          id="Pol\xEDgono_5"
          data-name="Pol\xEDgono 5"
          d="M8.5,0l2.975,5.391L17,6.875l-3.686,4.816L13.753,18,8.5,15.585,3.247,18l.44-6.309L0,6.875,5.525,5.391Z"
          transform="translate(83.834 0.023)"
          fill="#9873ac"
        />
      </g>
    </svg>
  );
}
