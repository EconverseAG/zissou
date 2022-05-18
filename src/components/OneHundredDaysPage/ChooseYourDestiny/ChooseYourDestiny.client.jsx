import ProductChoice from './ProductChoice';

import * as styles from './ChooseYourDestiny.module.scss';

import ColchoesImage from '../../../assets/colchoes-100-dias-page.png';
import BaseImage from '../../../assets/base-100-dias-page.png';
import TravesseiroImage from '../../../assets/travesseiro-100-dias-page.png';
import LencolDuvetImage from '../../../assets/lencol-e-duvet-100-dias-page.png';

function ChooseYourDestiny() {
  return (
    <>
      <h2>
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
