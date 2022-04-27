import {useProduct, Image} from '@shopify/hydrogen/client';
import {useCallback, useMemo, useState} from 'react';
import Slider from 'react-slick';

import * as styles from './ZissouProductImages.module.scss';

import ArrowNext from '../../assets/next-arrow.svg';
import ArrowPrev from '../../assets/prev-arrow.svg';
import useMobile from '../../hooks/useMobile';

const MODEL_3D_TYPE = 'MODEL_3D';
const VIDEO_TYPE = 'VIDEO';
const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';

function ZissouProductImages({title, thumbs, className}) {
  const [sliderRef, setSliderRef] = useState(null);
  const [navRef, setNavRef] = useState(null);

  const {media, selectedVariant} = useProduct();

  const {isMobile} = useMobile();

  const featuredMedia = useMemo(
    () => selectedVariant.image || media[0]?.image,
    [selectedVariant, media],
  );

  const mediaFiltered = useMemo(
    () =>
      media.filter((med) => {
        if (
          med.mediaContentType === MODEL_3D_TYPE ||
          med.mediaContentType === VIDEO_TYPE ||
          med.mediaContentType === EXTERNAL_VIDEO_TYPE
        ) {
          return true;
        }

        return !med.image.url.includes(featuredMedia.url.split('?')[0]);
      }),
    [media, featuredMedia],
  );

  const sliderSettings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: navRef,
    }),
    [navRef],
  );

  const navSettings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: sliderRef,
    }),
    [sliderRef],
  );

  const renderImages = useCallback(() => {
    if (!mediaFiltered) return;

    return mediaFiltered.map(({image}) => (
      <div key={image.id} className={styles.imageContainer}>
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.altText}
        />
      </div>
    ));
  }, [mediaFiltered]);

  return (
    <div
      className={`${styles.wrapper} ${
        isMobile ? styles.mobile : ''
      } ${className}`}
    >
      {!isMobile && title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.wrapperSlider}>
        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={sliderRef?.slickPrev}
        >
          <Image src={ArrowPrev} width={12} height={35} />
        </button>
        <Slider
          ref={setSliderRef}
          className={styles.slider}
          {...sliderSettings}
        >
          <div className={styles.imageContainer}>
            <Image
              src={featuredMedia.url}
              width={featuredMedia.width}
              height={featuredMedia.height}
              alt={featuredMedia.altText}
            />
          </div>
          {renderImages()}
        </Slider>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={sliderRef?.slickNext}
        >
          <Image src={ArrowNext} width={12} height={35} />
        </button>
      </div>
      {isMobile && title && <h2 className={styles.title}>{title}</h2>}
      {!isMobile && thumbs && (
        <div className={styles.wrapperNav}>
          <Slider ref={setNavRef} className={styles.nav} {...navSettings}>
            <div className={styles.imageContainer}>
              <Image
                src={featuredMedia.url}
                width={featuredMedia.width}
                height={featuredMedia.height}
                alt={featuredMedia.altText}
              />
            </div>
            {renderImages()}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default ZissouProductImages;