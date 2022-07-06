import parseUrl from '../../helpers/parseUrl';

const Banner_1 = parseUrl('slick_colchao.png');
const Banner_2 = parseUrl('slick_base.png');
const Banner_3 = parseUrl('slick_travesseiro.png');
const Banner_4 = parseUrl('slick_lencol.png');
const Banner_5 = parseUrl('slick_toca.png');

const MobileBanner_1 = parseUrl('mobileBanner_1.png');
const MobileBanner_2 = parseUrl('mobileBanner_2.png');
const MobileBanner_3 = parseUrl('mobileBanner_3.png');
const MobileBanner_4 = parseUrl('mobileBanner_4.png');
const MobileBanner_5 = parseUrl('mobileBanner_5.png');

import Slick from '../Slick/Slick.client';

export default function ChooseYourDestiny() {
  const banners = [
    {
      banner: Banner_1,
      mobileImage: MobileBanner_1,
      link: '/pages/colchoes-zissou',
      CTA: 'COLCHÕES',
    },
    {
      banner: Banner_2,
      mobileImage: MobileBanner_2,
      link: '/products/base-zissou',
      CTA: 'BASE',
    },
    {
      banner: Banner_3,
      mobileImage: MobileBanner_3,
      link: '/products/travesseiro-zissou',
      CTA: 'TRAVESSEIRO',
    },
    {
      banner: Banner_4,
      mobileImage: MobileBanner_4,
      link: '/pages/lencol-e-duvet-zissou',
      CTA: 'LENÇOL & DUVET',
    },
    {
      banner: Banner_5,
      mobileImage: MobileBanner_5,
      link: '/products/toca-zissou',
      CTA: 'TOCA',
    },
  ];

  let title = 'Escolha seu destino';
  let subtitle =
    'Cada produto foi desenhado para você viver ao máximo o seu sono';

  return (
    <>
      <Slick
        fade
        infinite
        autoplay
        autoplaySpeed={4000}
        arrows
        banners={banners}
        title={title}
        subtitle={subtitle}
      />
    </>
  );
}
