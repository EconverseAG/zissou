import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './cinematographyBanner.module.scss';
import parseUrl from '../../helpers/parseUrl';

const Logo = parseUrl('logo-zissou-white.webp');

const BannerDefault = parseUrl('banner_default.webp');

export default function CinematographyBanner() {
  const banners = [
    {
      banner:
        'https://cdn.shopify.com/videos/c/o/v/e3c317eb670c4629bf441c759b4af974.mp4',
      horaInicio: 0,
      horaFim: 23,
      link: '/pages/colchoes-zissou',
      CTA: 'DESCUBRA OS COLCHÕES',
    },
    // {
    //   banner: Coral,
    //   horaInicio: 12,
    //   horaFim: 18,
    //   link: '/pages/colchoes-zissou',
    //   CTA: 'DESCUBRA OS COLCHÕES',
    // },
    // {
    //   banner: Blue,
    //   horaInicio: 19,
    //   horaFim: 23,
    //   link: '/pages/colchoes-zissou',
    //   CTA: 'DESCUBRA OS COLCHÕES',
    // },
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
