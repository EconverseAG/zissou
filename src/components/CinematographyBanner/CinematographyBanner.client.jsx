import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './cinematographyBanner.module.scss';

import Logo from '../../assets/logo-zissou-white.webp';

import Video_1 from '../../assets/video_1.webm';
import Video_2 from '../../assets/video_2.webm';
import BannerDefault from '../../assets/banner_default.webp';

export default function CinematographyBanner() {
  const banners = [
    {
      banner: Video_1,
      horaInicio: 0,
      horaFim: 12,
      link: '/pages/colchoes-zissou',
      CTA: 'DESCUBRA OS COLCHÕES',
    },
    {
      banner: Video_2,
      horaInicio: 13,
      horaFim: 23,
      link: '/pages/colchoes-zissou',
      CTA: 'DESCUBRA OS COLCHÕES',
    },
  ];

  let hrs = new Date().getHours();

  let bannerFiltered = banners.filter((banner) => {
    return banner.horaInicio <= hrs && banner.horaFim >= hrs;
  });

  return (
    <div className={styles.videoContainer}>
      <div className={styles.logoHome}>
        <Image src={Logo} width="250" height="68" loading={'lazy'} />
      </div>

      <div className={styles.videoContent}>
        {bannerFiltered.length ? (
          bannerFiltered.map((banner) => {
            return (
              <div key={banner.link}>
                <Link to={banner.link}>
                  <video
                    className={styles.video}
                    src={banner.banner}
                    autoPlay
                    loop
                    muted
                  />
                </Link>

                <Link to={banner.link} className={styles.buttonCTA}>
                  {banner.CTA}
                </Link>
              </div>
            );
          })
        ) : (
          <Image
            src={BannerDefault}
            width="1980"
            height="890"
            loading={'lazy'}
          />
        )}
      </div>
    </div>
  );
}
