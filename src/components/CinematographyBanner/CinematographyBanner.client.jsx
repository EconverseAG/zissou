import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './cinematographyBanner.module.scss';

import Logo from '../../assets/logo-zissou-white.png';

import Video_1 from '../../assets/video_1.mp4';
import Video_2 from '../../assets/video_2.mp4';
import BannerDefault from '../../assets/banner_default.png';

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
        <Image src={Logo} width="265" height="70" />
      </div>

      <div className={styles.videoContent}>
        {bannerFiltered.length ? (
          bannerFiltered.map((banner) => {
            return (
              <>
                <Link key={banner.link} to={banner.link}>
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
              </>
            );
          })
        ) : (
          <Image src={BannerDefault} width="1980" height="890" />
        )}
      </div>
    </div>
  );
}
