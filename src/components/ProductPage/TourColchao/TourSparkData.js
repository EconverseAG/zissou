import CapaFundo from '../../../assets/capa_fundo_spark.png';
import CamadaDeConfortoFundo from '../../../assets/camada_de_conforto_fundo_spark.png';
import CamadaDeAconchegoFundo from '../../../assets/camada_de_aconchego_fundo_spark.png';
import SistemaDeSuporteFundo from '../../../assets/sistema_de_suporte_fundo_spark.png';
import SistemaDeSuporteHibridoFundo from '../../../assets/sistema_de_suporte_hibrido_fundo_spark.png';

import BandeiraEUA from '../../../assets/eua_pdp.png';
import BandeiraBelgica from '../../../assets/belgica_pdp.png';
import BandeiraBrasil from '../../../assets/brasil_pdp.png';

export default [
  {
    title: 'Capa',
    imageSrc: CapaFundo,
    modal: {
      title: 'TECIDO VELVET AND BALANCED',
      imageTitle: BandeiraEUA,
      width: 30,
      height: 30,
      text: `
        - Tecido de origem americana
        <br />
        <br />
        - Combina fibras de alta gramatura com leve elasticidade
        <br />
        <br />
        - Proporciona toque aveludado e suave
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'Camada <br /> de conforto',
    imageSrc: CamadaDeConfortoFundo,
    modal: {
      title: 'LATEX INFUDED',
      imageTitle: BandeiraBelgica,
      width: 30,
      height: 30,
      text: `
        <strong>Altura da camada:</strong> 4cm
        <br />
        <br />
        - Látex Acefom HR de alta resiliência, de origem belga, que é um material exclusivo dos colchões Spark
        <br />
        <br />
        - Aumenta o conforto e a resiliência na superfície do colchão
        <br />
        <br />
        - Proporciona microclima saudável na cama
        <br />
        <br />
        - Possui ótimas características ergonômicas e excelente durabilidade
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'Camada de <br /> aconhego',
    imageSrc: CamadaDeAconchegoFundo,
    modal: {
      title: 'VISCO',
      width: 30,
      height: 30,
      imageTitle: BandeiraBrasil,
      text: `
        <strong>Altura da camada:</strong> 4cm
        <br />
        <br />
        - Viscoelástico de memória responsiva
        <br />
        <br />
        - Se molda ao formato e peso do corpo
        <br />
        <br />
        - Absorve e distribui a pressão
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'SISTEMA DE <br /> SUPORTE',
    imageSrc: SistemaDeSuporteFundo,
    modal: {
      title: 'SISTEMA DE SUPORTE',
      width: 30,
      height: 30,
      imageTitle: BandeiraEUA,
      text: `
        <strong>Altura da camada:</strong> 12cm
        <br />
        <strong>Material:</strong> Poliuretano
        <br />
        <br />
        - Espuma de pooliuretano de alta densidade e durabilidade
        <br />
        <br />
        - Proporciona suporte uniforme em todas a superfície do colchão
        <br />
        <br />
        - Reforça o isolamento de movimentos
      `,
      buttonText: 'opcão de sistema de SUPORTE HÍBRIDO →',
    },
  },
  {
    title: 'SISTEMA de <br /> Suporte HÍBRIDO',
    imageSrc: SistemaDeSuporteHibridoFundo,
    modal: {
      title: 'OPÇÃO DE SISTEMA DE SUPORTE HÍBRIDO',
      width: 115,
      height: 90,
      text: `
        <strong>Altura da camada:</strong> 17cm
        <br />
        <strong>Material:</strong> Poliuretano e molas ensacadas individualmente
        <br />
        <br />
        - Combina espuma de poliuretano de alta densidade e molas Legget & Platt ensacadas individualmente
        <br />
        <br />
        - Proporciona mais bounce, com adaptação às curvas do corpo
        <br />
        <br />
        - Agrega 5cm ao colchão
      `,
      buttonText: 'VOLTAR PARA O TOUR →',
    },
  },
];
