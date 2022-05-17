import {Image} from '@shopify/hydrogen';

import Table from '../Table';

import TextureBlue from '../../../assets/textura-blue.png';
import TextureCoral from '../../../assets/textura-coral.png';
import TextureCoralHybrid from '../../../assets/textura-coral-hibrido.png';

import IconFrescor from '../../../assets/icon-frescor.png';

function SensationTable({...rest}) {
  return (
    <Table heading="Toque e sensação térmica" {...rest}>
      <tr>
        <th>Toque</th>
        <td>Suave e macio</td>
        <td>Suave e macio</td>
        <td>Plush e acetinado</td>
      </tr>
      <tr>
        <th>
          Textura
          <br /> do tecido
        </th>
        <td>
          <Image src={TextureCoral} width={267} height={172} />
        </td>
        <td>
          <Image src={TextureCoralHybrid} width={267} height={172} />
        </td>
        <td>
          <Image src={TextureBlue} width={267} height={172} />
        </td>
      </tr>
      <tr>
        <th>Frescor</th>
        <td>
          <Image src={IconFrescor} width={69} height={69} />
        </td>
        <td>
          <Image src={IconFrescor} width={69} height={69} />
        </td>
        <td>
          <Image src={IconFrescor} width={69} height={69} />
          <Image src={IconFrescor} width={69} height={69} />
          <Image src={IconFrescor} width={69} height={69} />
        </td>
      </tr>
      <tr>
        <th>
          Características
          <br /> do tecido
        </th>
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
      </tr>
    </Table>
  );
}

export default SensationTable;
