import Banner_1 from '../../assets/slick_colchao.webp';
import Banner_2 from '../../assets/slick_base.webp';
import Banner_3 from '../../assets/slick_travesseiro.webp';
import Banner_4 from '../../assets/slick_lencol.webp';

import MobileBanner_1 from '../../assets/mobileBanner_1.webp';
import MobileBanner_2 from '../../assets/mobileBanner_2.webp';
import MobileBanner_3 from '../../assets/mobileBanner_3.webp';
import MobileBanner_4 from '../../assets/mobileBanner_4.webp';

import Slick from '../Slick/Slick.client';

export default function ChooseYourDestiny() {
  const banners = [
    {
      banner: Banner_1,
      mobileImage: MobileBanner_1,
      link: 'https://www.zissou.com.br/pages/colchoes-zissou',
      CTA: 'COLCHÕES',
    },
    {
      banner: Banner_2,
      mobileImage: MobileBanner_2,
      link: 'https://www.zissou.com.br/products/base-zissou',
      CTA: 'BASE',
    },
    {
      banner: Banner_3,
      mobileImage: MobileBanner_3,
      link: 'https://www.zissou.com.br/products/travesseiro-zissou',
      CTA: 'TRAVESSEIRO',
    },
    {
      banner: Banner_4,
      mobileImage: MobileBanner_4,
      link: 'https://www.zissou.com.br/pages/lencol-e-duvet-zissou',
      CTA: 'LENÇOL & DUVET',
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
