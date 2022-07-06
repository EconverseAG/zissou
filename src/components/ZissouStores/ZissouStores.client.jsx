import parseUrl from '../../helpers/parseUrl';

const Banner_1 = parseUrl('slick_lojas_1.webp');
const Banner_2 = parseUrl('slick_lojas_2.webp');
const Banner_4 = parseUrl('slick_lojas_4.webp');
const Banner_5 = parseUrl('slick_lojas_5.webp');
const Banner_6 = parseUrl('slick_lojas_6.webp');

const MobileBanner_1 = parseUrl('slick_lojas_mobile_1.webp');
const MobileBanner_2 = parseUrl('slick_lojas_mobile_2.webp');
const MobileBanner_4 = parseUrl('slick_lojas_mobile_4.webp');
const MobileBanner_5 = parseUrl('slick_lojas_mobile_5.webp');
const MobileBanner_6 = parseUrl('slick_lojas_mobile_6.webp');

import Slick from '../Slick/Slick.client';

export default function ZissouStores() {
  const banners = [
    {
      titleCaption: 'CASA ZISSOU',
      subtitleCaption: `Nossa flagship no coração dos Jardins`,
      banner: Banner_1,
      mobileImage: MobileBanner_1,
      link: '/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'CASA ZISSOU',
      subtitleCaption: 'Nossa flagship no coração dos Jardins',
      banner: Banner_2,
      mobileImage: MobileBanner_2,
      link: '/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'ZISSOU NORMANDIA',
      subtitleCaption:
        'Uma imersão no universo do sono, na rua mais charmosa de São Paulo',
      banner: Banner_4,
      mobileImage: MobileBanner_4,
      link: '/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'ZISSOU NORMANDIA',
      subtitleCaption:
        'Uma imersão no universo do sono, na rua mais charmosa de São Paulo',
      banner: Banner_5,
      mobileImage: MobileBanner_5,
      link: '/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'ZISSOU NORMANDIA',
      subtitleCaption:
        'Uma imersão no universo do sono, na rua mais charmosa de São Paulo',
      banner: Banner_6,
      mobileImage: MobileBanner_6,
      link: '/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
  ];

  return (
    <div className="ZissouStoresContainer">
      <Slick
        fade
        infinite
        autoplay
        autoplaySpeed={4000}
        arrows
        banners={banners}
      />
    </div>
  );
}
