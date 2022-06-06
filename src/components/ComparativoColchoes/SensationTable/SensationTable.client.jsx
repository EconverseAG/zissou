import {Image} from '@shopify/hydrogen';

import Table from '../Table';
import TableRow from '../TableRow';

import TextureSpark from '../../../assets/textura-spark.png';
import TextureBlue from '../../../assets/textura-blue.png';
import TextureCoral from '../../../assets/textura-coral.png';
import TextureCoralHybrid from '../../../assets/textura-coral-hibrido.png';

import TextureSparkMobile from '../../../assets/textura-spark-mobile.png';
import TextureBlueMobile from '../../../assets/textura-blue-mobile.png';
import TextureCoralMobile from '../../../assets/textura-coral-mobile.png';
import TextureCoralHybridMobile from '../../../assets/textura-coral-hibrido-mobile.png';

import IconFrescor from '../../../assets/icon-frescor.svg';
import useMobile from '../../../hooks/useMobile';
import TableCheck from '../TableCheck';

function SensationTable({...rest}) {
  const {isMobile} = useMobile();

  return (
    <Table heading="Toque e sensação térmica" {...rest}>
      <TableRow heading="Toque">
        <td>Aveludado</td>
        <td>Aveludado</td>
        <td>Suave e macio</td>
        <td>Suave e macio</td>
        <td>Plush e acetinado</td>
      </TableRow>
      <TableRow heading="Textura do tecido">
        <td>
          <Image
            src={isMobile ? TextureSparkMobile : TextureSpark}
            width={isMobile ? 123 : 267}
            height={isMobile ? 79 : 172}
          />
        </td>
        <td>
          <Image
            src={isMobile ? TextureSparkMobile : TextureSpark}
            width={isMobile ? 123 : 267}
            height={isMobile ? 79 : 172}
          />
        </td>
        <td>
          <Image
            src={isMobile ? TextureCoralMobile : TextureCoral}
            width={isMobile ? 123 : 267}
            height={isMobile ? 79 : 172}
          />
        </td>
        <td>
          <Image
            src={isMobile ? TextureCoralHybridMobile : TextureCoralHybrid}
            width={isMobile ? 123 : 267}
            height={isMobile ? 79 : 172}
          />
        </td>
        <td>
          <Image
            src={isMobile ? TextureBlueMobile : TextureBlue}
            width={isMobile ? 123 : 267}
            height={isMobile ? 79 : 172}
          />
        </td>
      </TableRow>
      <TableRow heading="Frescor">
        <td>
          <TableCheck />
        </td>
        <td>
          <TableCheck />
        </td>
        <td>
          <Image
            src={IconFrescor}
            width={isMobile ? 44 : 69}
            height={isMobile ? 44 : 69}
          />
        </td>
        <td>
          <Image
            src={IconFrescor}
            width={isMobile ? 44 : 69}
            height={isMobile ? 44 : 69}
          />
        </td>
        <td>
          <Image
            src={IconFrescor}
            width={isMobile ? 44 : 69}
            height={isMobile ? 44 : 69}
          />
          <Image
            src={IconFrescor}
            width={isMobile ? 44 : 69}
            height={isMobile ? 44 : 69}
          />
          <Image
            src={IconFrescor}
            width={isMobile ? 44 : 69}
            height={isMobile ? 44 : 69}
          />
        </td>
      </TableRow>
      <TableRow heading="Características do tecido">
        <td>
          <div>
            <h3>Velvet & Balanced</h3>
            <br />
            <p>
              • Tecido de origem americana
              <br />
              • Combina fibras de alta gramatura com toque de elastano
              <br />• Construção de trama especial, que proporciona toque
              aveludado com leve elasticidade
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Velvet & Balanced</h3>
            <br />
            <p>
              • Tecido de origem americana
              <br />
              • Combina fibras de alta gramatura com toque de elastano
              <br />• Construção de trama especial, que proporciona toque
              aveludado com leve elasticidade
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Soft & Chill</h3>
            <br />
            <p>
              • Tecido premium de origem americana
              <br />
              • Altamente respirável
              <br />
              • Tecnologia que previne o aquecimento do corpo
              <br />
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Soft & Chill</h3>
            <br />
            <p>
              • Tecido premium de origem americana
              <br />
              • Altamente respirável
              <br />
              • Tecnologia que previne o aquecimento do corpo
              <br />
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Plush & Cool</h3>
            <br />
            <p>
              • Material produzido nos EUA
              <br />
              • Tecido matelassado, criando superfície acolchoada, que
              proporciona mais maciez
              <br />
              • Tecnologia Ultra Cooling, que potencializa a condutividade
              térmica, criando o micro-clima ideal para o sono de qualidade
              <br />
            </p>
          </div>
        </td>
      </TableRow>
    </Table>
  );
}

export default SensationTable;
