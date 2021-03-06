import useMobile from '../../hooks/useMobile';
import {Image, ProductProvider} from '@shopify/hydrogen';

import * as styles from './ShelfBlue.module.scss';
import parseUrl from '../../helpers/parseUrl';

const SeloBlue = parseUrl('selo_blue.png');
const SeloBlueMobile = parseUrl('selo_blue_mobile.png');
const Geracao2021 = parseUrl('geracao_2021.png');
const Geracao2021Mobile = parseUrl('geracao_2021_mobile.png');
const ColchaoBlue = parseUrl('foto_blue.png');
const ColchaoTour = parseUrl('tour_blue_pdp.png');

const BlueShelf1 = parseUrl('blue-shelf-1.png');
const BlueShelf2 = parseUrl('blue-shelf-2.png');
const BlueShelf3 = parseUrl('blue-shelf-3.png');
const BlueShelf4 = parseUrl('blue-shelf-4.png');
const BlueShelf5 = parseUrl('blue-shelf-5.png');

import Shelf from '../Shelf/Shelf.client';

export default function ShelfBlue({content}) {
  const {isMobile} = useMobile();
  let variants = content.variants.edges;

  const images = [
    {
      src: BlueShelf1,
    },
    {
      src: BlueShelf2,
    },
    {
      src: BlueShelf3,
    },
    {
      src: BlueShelf4,
    },
    {
      src: BlueShelf5,
    },
  ];

  return (
    <div className={styles.ShelfBlueContainer}>
      <div className={styles.ShelfBlueTop}>
        <div className={styles.flexItem}>
          <Image
            src={isMobile ? SeloBlueMobile : SeloBlue}
            width={isMobile ? 103 : 284}
            height={isMobile ? 27 : 74}
          />
        </div>
        <div className={styles.flexItem}>
          <Image
            src={isMobile ? Geracao2021Mobile : Geracao2021}
            width={isMobile ? 85 : 187}
            height={isMobile ? 85 : 187}
          />
        </div>
        <div className={styles.flexItem}>
          <Image
            src={ColchaoBlue}
            width={isMobile ? 271 : 847}
            height={isMobile ? 97 : 303}
          />
        </div>
      </div>
      <div className={styles.ShelfBlueMiddle}>
        {variants.map((variant, index) => {
          return (
            <ProductProvider
              key={variant.node.id}
              data={content}
              initialVariantId={variant.node.id}
            >
              <Shelf
                product={content}
                variant={variant}
                color={'#415264'}
                imageSrc={images[index].src}
              />
            </ProductProvider>
          );
        })}
      </div>
      <div className={styles.ShelfBlueBottom}>
        <div className={styles.ShelfBlueLeft}>
          <Image src={ColchaoTour} width={557} height={433} />
        </div>
        <div className={styles.ShelfBlueRight}>
          <strong className={styles.ShelfBlueRightTitle}>
            Blue Gera????o 2021
          </strong>
          <ul className={styles.ShelfBlueRightList}>
            <li>??? Produzido nos EUA</li>
            <li>
              ??? Sensa????o de mais maciez intermedi??ria, com equil??brio entre
              bounce sustenta????o
            </li>
            <li>
              ??? Ideal para quem gosta de um colch??o que abra??a, mais macio que a
              nova gera????o
            </li>
            <li>??? Tecido refrescante com tecnologia Ultra Cooling</li>
            <li>
              ??? Sistema de conforto com equil??brio ideal entre a resil??ncia do
              l??tex e a absor????o de movimentos do viscoel??stico
            </li>
            <li>
              ??? Camada de suporte com 17,5cm, composta por espuma de poliuretano
              e molas ensacadas individualmente, que proporcionam maior fluxo de
              ar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
