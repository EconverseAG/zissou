import ProductChoice from './ProductChoice';

import * as styles from './ChooseYourDestiny.module.scss';
import parseUrl from '../../../helpers/parseUrl';

const ColchoesImage = parseUrl('colchoes-100-dias-page.png');
const BaseImage = parseUrl('base-100-dias-page.png');
const TravesseiroImage = parseUrl('travesseiro-100-dias-page.png');
const LencolDuvetImage = parseUrl('lencol-e-duvet-100-dias-page.png');
import useMobile from '../../../hooks/useMobile';

function ChooseYourDestiny() {
  const {isMobile} = useMobile();

  return (
    <>
      <h2 style={{maxWidth: isMobile ? '291px' : 'initial'}}>
        Escolha seu destino com{' '}
        <strong>100 dias de testes sem compromisso</strong>
      </h2>
      <div className={styles.choiceList}>
        <ProductChoice
          name="Colchões"
          url="/pages/colchoes-zissou"
          image={ColchoesImage}
        />
        <ProductChoice
          name="Base"
          url="/products/base-zissou"
          image={BaseImage}
        />
        <ProductChoice
          name="Travesseiro"
          url="/products/travesseiro-zissou"
          image={TravesseiroImage}
        />
        <ProductChoice
          name="Lençol & Duvet"
          url="/pages/lencol-e-duvet-zissou"
          image={LencolDuvetImage}
        />
      </div>
    </>
  );
}

export default ChooseYourDestiny;
