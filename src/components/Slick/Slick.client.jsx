import {useState, useEffect} from 'react';
import useMobile from '../../hooks/useMobile';
import {Image, Link} from '@shopify/hydrogen/client';
import Slider from 'react-slick/lib/slider';

import * as styles from './slick.module.scss';

export default function Slick(props) {
  const [isMobile, setIsMobile] = useState(false);

  const {isMobile: incorrectIsMobile} = useMobile();

  useEffect(() => {
    setIsMobile(incorrectIsMobile);
  }, [incorrectIsMobile]);

  const settings = {
    dots: props.dots || false,
    fade: props.fade || false,
    infinite: props.infinite || false,
    slidesToShow: props.slidesToShow || 1,
    slidesToScroll: props.slidesToScroll || 1,
    autoplay: props.autoplay || false,
    autoplaySpeed: props.autoplaySpeed || 3000,
    arrows: props.arrows || false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.slickContainer}>
        <div className={styles.slickTitle}>
          {props.title && <strong>{props.title}</strong>}
          {props.subtitle && <span>{props.subtitle}</span>}
        </div>
        <Slider {...settings}>
          {props.banners.map((banner) => {
            return (
              <div key={banner.titleCaption || banner.CTA}>
                {banner.titleCaption && banner.subtitleCaption && (
                  <>
                    <strong className={styles.bannerTitle}>
                      {banner.titleCaption}
                    </strong>
                    <span className={styles.bannerSubtitle}>
                      {banner.subtitleCaption}
                    </span>
                  </>
                )}
                <Image
                  key={banner.link}
                  src={!isMobile ? banner.banner : banner.mobileImage}
                  width={!isMobile ? '1400' : '100%'}
                  height={!isMobile ? '650' : '100%'}
                  loading={'lazy'}
                />
                <Link to={banner.link} className={styles.buttonCTA}>
                  {banner.CTA}
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
