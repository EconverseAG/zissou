import {Image, useProduct} from '@shopify/hydrogen/client';
import {useCallback, useMemo, useState} from 'react';
import Slider from 'react-slick';
import parseUrl from '../../helpers/parseUrl';

import useZissouProduct from '../../hooks/useZissouProduct';

import * as styles from './ZissouProductImages.module.scss';

const ArrowNextSpark = parseUrl('next-arrow-spark.svg');
const ArrowPrevSpark = parseUrl('prev-arrow-spark.svg');
const ArrowNextBlue = parseUrl('next-arrow-blue.svg');
const ArrowPrevBlue = parseUrl('prev-arrow-blue.svg');
const ArrowNextCoral = parseUrl('next-arrow.svg');
const ArrowPrevCoral = parseUrl('prev-arrow.svg');
const ArrowNext = parseUrl('next-arrow-lilac.svg');
const ArrowPrev = parseUrl('prev-arrow-lilac.svg');
import TravesseiroBanner from '../../assets/travesseiro_banner_mobile.jpg';
import BaseBanner from '../../assets/base-banner.gif';
const LencolBanner = parseUrl('lencol-banner-background.png');
const DuvetBanner = parseUrl('duvet-banner-background.png');
const SparkBanner = parseUrl('pdp-spark-mobile.png');
const CoralBanner = parseUrl('pdp_coral_mobile.png');
const BlueBanner = parseUrl('pdp_blue_mobile.png');
const SparkCaixa = parseUrl('spark-caixa.png');
const CoralCaixa = parseUrl('caixas-coral.jpg');
const BlueCaixa = parseUrl('blue-caixa.jpg');
import useMobile from '../../hooks/useMobile';

const MODEL_3D_TYPE = 'MODEL_3D';
const VIDEO_TYPE = 'VIDEO';
const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';

function ZissouProductImages({
  title,
  thumbs,
  navigation = 'arrows',
  arrowsInside,
  shadow,
  className,
}) {
  const [sliderRef, setSliderRef] = useState(null);
  const [navRef, setNavRef] = useState(null);

  const {media, selectedVariant} = useProduct();
  const {isTravesseiro, isBase, isLencol, isDuvet, isSpark, isCoral, isBlue} =
    useZissouProduct();

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
      dots: navigation === 'dots',
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: navRef,
      variableHeight: false,
    }),
    [navRef, navigation],
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
          loading={'lazy'}
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
      <div
        className={`${styles.wrapperSlider} ${
          arrowsInside ? styles.arrowsInside : ''
        } ${shadow ? styles.shadow : ''} ${
          isCoral
            ? styles.coral
            : isBlue
            ? styles.blue
            : isSpark
            ? styles.spark
            : ''
        }`}
      >
        {navigation === 'arrows' && (
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={sliderRef?.slickPrev}
          >
            <Image
              src={
                isSpark
                  ? ArrowPrevSpark
                  : isCoral
                  ? ArrowPrevCoral
                  : isBlue
                  ? ArrowPrevBlue
                  : ArrowPrev
              }
              width={12}
              height={35}
            />
          </button>
        )}
        <Slider
          ref={setSliderRef}
          className={styles.slider}
          {...sliderSettings}
        >
          {isMobile && isBase && (
            <div className={styles.imageContainer}>
              <Image src={BaseBanner} width={1920} height={1080} />
            </div>
          )}
          {isMobile && isTravesseiro && (
            <div className={styles.imageContainer}>
              <Image src={TravesseiroBanner} width={1908} height={1480} />
            </div>
          )}
          {isMobile && isLencol && (
            <div className={styles.imageContainer}>
              <Image src={LencolBanner} width={1920} height={995} />
            </div>
          )}
          {isMobile && isDuvet && (
            <div className={styles.imageContainer}>
              <Image src={DuvetBanner} width={1920} height={995} />
            </div>
          )}
          {isMobile && isSpark && (
            <div className={styles.imageContainer}>
              <Image
                src={SparkBanner}
                width={375}
                height={396}
                style={{width: '100%'}}
              />
              <span className={styles.bannerTitle}>
                Colchão
                <br /> Zissou Spark
              </span>
            </div>
          )}
          {isMobile && isCoral && (
            <div className={styles.imageContainer}>
              <Image
                src={CoralBanner}
                width={375}
                height={396}
                style={{width: '100%'}}
              />
              <span className={styles.bannerTitle}>
                Colchão
                <br /> Zissou Coral
              </span>
            </div>
          )}
          {isMobile && isBlue && (
            <div className={styles.imageContainer}>
              <Image
                src={BlueBanner}
                width={375}
                height={396}
                style={{width: '100%'}}
              />
              <span className={styles.bannerTitle}>
                Colchão
                <br /> Zissou Blue
              </span>
            </div>
          )}
          <div className={styles.imageContainer}>
            <Image
              src={featuredMedia.url}
              width={featuredMedia.width}
              height={featuredMedia.height}
              alt={featuredMedia.altText}
            />
          </div>
          {renderImages()}
          {isSpark && (
            <div className={styles.imageContainer}>
              <Image
                src={SparkCaixa}
                width={1235}
                height={775}
                style={{width: '100%'}}
              />
            </div>
          )}
          {isCoral && (
            <div className={styles.imageContainer}>
              <Image src={CoralCaixa} width={720} height={453} />
            </div>
          )}
          {isBlue && (
            <div className={styles.imageContainer}>
              <Image src={BlueCaixa} width={720} height={453} />
            </div>
          )}
        </Slider>
        {navigation === 'arrows' && (
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={sliderRef?.slickNext}
          >
            <Image
              src={
                isSpark
                  ? ArrowNextSpark
                  : isCoral
                  ? ArrowNextCoral
                  : isBlue
                  ? ArrowNextBlue
                  : ArrowNext
              }
              width={12}
              height={35}
            />
          </button>
        )}
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
