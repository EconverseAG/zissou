import useMobile from '../../hooks/useMobile';
import {Image, ProductProvider} from '@shopify/hydrogen';

import * as styles from './ShelfBlue.module.scss';

import SeloBlue from '../../assets/selo_blue.png';
import SeloBlueMobile from '../../assets/selo_blue_mobile.png';
import Geracao2021 from '../../assets/geracao_2021.png';
import Geracao2021Mobile from '../../assets/geracao_2021_mobile.png';
import ColchaoBlue from '../../assets/foto_blue.png';
import ColchaoTour from '../../assets/tour_blue_pdp.png';

import Shelf from '../Shelf/Shelf.client';

export default function ShelfBlue({content}) {
  const {isMobile} = useMobile();
  let variants = content.variants.edges;

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
        {variants.map((variant) => {
          return (
            <ProductProvider
              key={variant.node.id}
              data={content}
              initialVariantId={variant.node.id}
            >
              <Shelf product={content} variant={variant} color={'#415264'} />
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
            Blue Geração 2021
          </strong>
          <ul className={styles.ShelfBlueRightList}>
            <li>• Produzido nos EUA</li>
            <li>
              • Sensação de mais maciez intermediária, com equilíbrio entre
              bounce sustentação
            </li>
            <li>
              • Ideal para quem gosta de um colchão que abraça, mais macio que a
              nova geração
            </li>
            <li>• Tecido refrescante com tecnologia Ultra Cooling</li>
            <li>
              • Sistema de conforto com equilíbrio ideal entre a resilência do
              látex e a absorção de movimentos do viscoelástico
            </li>
            <li>
              • Camada de suporte com 17,5cm, composta por espuma de poliuretano
              e molas ensacadas individualmente, que proporcionam maior fluxo de
              ar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
