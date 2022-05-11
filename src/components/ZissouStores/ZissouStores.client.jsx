import Banner_1 from '../../assets/slick_lojas_1.webp';
import Banner_2 from '../../assets/slick_lojas_2.webp';
import Banner_3 from '../../assets/slick_lojas_3.webp';
import Banner_4 from '../../assets/slick_lojas_4.webp';
import Banner_5 from '../../assets/slick_lojas_5.webp';
import Banner_6 from '../../assets/slick_lojas_6.webp';

import MobileBanner_1 from '../../assets/slick_lojas_mobile_1.webp';
import MobileBanner_2 from '../../assets/slick_lojas_mobile_2.webp';
import MobileBanner_3 from '../../assets/slick_lojas_mobile_3.webp';
import MobileBanner_4 from '../../assets/slick_lojas_mobile_4.webp';
import MobileBanner_5 from '../../assets/slick_lojas_mobile_5.webp';
import MobileBanner_6 from '../../assets/slick_lojas_mobile_6.webp';

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
      titleCaption: 'CASA ZISSOU',
      subtitleCaption: 'Nossa flagship no coração dos Jardins',
      banner: Banner_3,
      mobileImage: MobileBanner_3,
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

  let title = 'Lojas Zissou';

  return (
    <div className="ZissouStoresContainer">
      <Slick
        fade
        infinite
        autoplay
        autoplaySpeed={4000}
        arrows
        banners={banners}
        title={title}
      />
    </div>
  );
}
