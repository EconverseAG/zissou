import useMobile from '../../hooks/useMobile';
import {Image, ProductProvider} from '@shopify/hydrogen';

import * as styles from './ShelfCoral.module.scss';
import parseUrl from '../../helpers/parseUrl';

const SeloCoral = parseUrl('selo_coral.png');
const SeloCoralMobile = parseUrl('selo_coral_mobile.png');
const Geracao2021 = parseUrl('geracao_2021.png');
const Geracao2021Mobile = parseUrl('geracao_2021_mobile.png');
const ColchaoCoral = parseUrl('foto_coral.png');
const ColchaoTour = parseUrl('tour_coral_pdp.png');

const CoralShelf1 = parseUrl('coral-shelf-1.png');
const CoralShelf2 = parseUrl('coral-shelf-2.png');
const CoralShelf3 = parseUrl('coral-shelf-3.png');
const CoralShelf4 = parseUrl('coral-shelf-4.png');
const CoralShelf5 = parseUrl('coral-shelf-5.png');
const CoralShelf6 = parseUrl('coral-shelf-6.png');

import Shelf from '../Shelf/Shelf.client';

export default function ShelfCoral({content}) {
  const {isMobile} = useMobile();
  let variants = content.variants.edges;

  const images = [
    {
      src: CoralShelf1,
    },
    {
      src: CoralShelf2,
    },
    {
      src: CoralShelf3,
    },
    {
      src: CoralShelf4,
    },
    {
      src: CoralShelf5,
    },
    {
      src: CoralShelf6,
    },
  ];

  return (
    <div className={styles.ShelfCoralContainer}>
      <div className={styles.ShelfCoralTop}>
        <div className={styles.flexItem}>
          <Image
            src={isMobile ? SeloCoralMobile : SeloCoral}
            width={isMobile ? 103 : 284}
            height={isMobile ? 27 : 74}
          />
          <strong>Híbrido</strong>
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
            src={ColchaoCoral}
            width={isMobile ? 271 : 847}
            height={isMobile ? 97 : 303}
          />
        </div>
      </div>
      <div className={styles.ShelfCoralMiddle}>
        <ProductProvider data={content} initialVariantId={variants[0].node.id}>
          {variants.map((variant, index) => {
            return (
              <Shelf
                key={variant.node.id}
                product={content}
                variant={variant}
                color={'#F48580'}
                imageSrc={images[index].src}
              />
            );
          })}
        </ProductProvider>
      </div>
      <div className={styles.ShelfCoralBottom}>
        <div className={styles.ShelfCoralLeft}>
          <Image src={ColchaoTour} width={557} height={433} />
        </div>
        <div className={styles.ShelfCoralRight}>
          <strong className={styles.ShelfCoralRightTitle}>
            Coral Híbrido Geração 2021
          </strong>
          <ul className={styles.ShelfCoralRightList}>
            <li>• Produzido nos EUA</li>
            <li>• Sensação de firmeza Médio Macio</li>
            <li>• Tecido com tecnologia de cooling</li>
            <li>
              • Sistema de conforto com equilíbrio ideal entre a resilência do
              látex e a absorção de movimentos do viscoelástico
            </li>
            <li>
              • Sistema de suporte de espuma, com isolamento de movimentos
            </li>
            <li>
              • Sistema de suporte Híbrido com molas ensacadas individualmente,
              que se adaptam ao corpo e aliviam pontos de pressão
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
