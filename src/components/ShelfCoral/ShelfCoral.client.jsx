import useMobile from '../../hooks/useMobile';
import {Image, ProductProvider} from '@shopify/hydrogen';

import * as styles from './ShelfCoral.module.scss';

import SeloCoral from '../../assets/selo_coral.png';
import SeloCoralMobile from '../../assets/selo_coral_mobile.png';
import Geracao2021 from '../../assets/geracao_2021.png';
import Geracao2021Mobile from '../../assets/geracao_2021_mobile.png';
import ColchaoCoral from '../../assets/foto_coral.png';
import ColchaoTour from '../../assets/tour_coral_pdp.png';

import Shelf from '../Shelf/Shelf.client';

export default function ShelfCoral({content}) {
  const {isMobile} = useMobile();
  let variants = content.variants.edges;

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
        {variants.map((variant) => {
          return (
            <ProductProvider
              key={variant.node.id}
              data={content}
              initialVariantId={variant.node.id}
            >
              <Shelf product={content} variant={variant} color={'#F48580'} />
            </ProductProvider>
          );
        })}
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
