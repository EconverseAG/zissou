import Banner_1 from '../../assets/slick_lojas_1.png';
import Banner_2 from '../../assets/slick_lojas_2.png';
import Banner_3 from '../../assets/slick_lojas_3.png';
import Banner_4 from '../../assets/slick_lojas_4.png';
import Banner_5 from '../../assets/slick_lojas_5.png';
import Banner_6 from '../../assets/slick_lojas_6.png';

import MobileBanner_1 from '../../assets/slick_lojas_mobile_1.png';
import MobileBanner_2 from '../../assets/slick_lojas_mobile_2.png';
import MobileBanner_3 from '../../assets/slick_lojas_mobile_3.png';
import MobileBanner_4 from '../../assets/slick_lojas_mobile_4.png';
import MobileBanner_5 from '../../assets/slick_lojas_mobile_5.png';
import MobileBanner_6 from '../../assets/slick_lojas_mobile_6.png';

import Slick from '../Slick/Slick.client';

export default function ZissouStores() {
  const banners = [
    {
      titleCaption: 'CASA ZISSOU',
      subtitleCaption: `Nossa flagship no coração dos Jardins`,
      banner: Banner_1,
      mobileImage: MobileBanner_1,
      link: 'https://www.zissou.com.br/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'CASA ZISSOU',
      subtitleCaption: 'Nossa flagship no coração dos Jardins',
      banner: Banner_2,
      mobileImage: MobileBanner_2,
      link: 'https://www.zissou.com.br/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'CASA ZISSOU',
      subtitleCaption: 'Nossa flagship no coração dos Jardins',
      banner: Banner_3,
      mobileImage: MobileBanner_3,
      link: 'https://www.zissou.com.br/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'ZISSOU NORMANDIA',
      subtitleCaption:
        'Uma imersão no universo do sono, na rua mais charmosa de São Paulo',
      banner: Banner_4,
      mobileImage: MobileBanner_4,
      link: 'https://www.zissou.com.br/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'ZISSOU NORMANDIA',
      subtitleCaption:
        'Uma imersão no universo do sono, na rua mais charmosa de São Paulo',
      banner: Banner_5,
      mobileImage: MobileBanner_5,
      link: 'https://www.zissou.com.br/pages/casa-zissou',
      CTA: 'CONHEÇA NOSSAS LOJAS',
    },
    {
      titleCaption: 'ZISSOU NORMANDIA',
      subtitleCaption:
        'Uma imersão no universo do sono, na rua mais charmosa de São Paulo',
      banner: Banner_6,
      mobileImage: MobileBanner_6,
      link: 'https://www.zissou.com.br/pages/casa-zissou',
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
