import CapaFundo from '../../../assets/capa_fundo.png';
import CamadaDeConfortoFundo from '../../../assets/camada_de_conforto_fundo.png';
import CamadaDeAconchegoFundo from '../../../assets/camada_de_aconchego_fundo.png';
import SistemaDeSuporteFundo from '../../../assets/sistema_de_suporte_fundo.png';
import OpcaoSistemaDeSuporteFundo from '../../../assets/opcao_sistema_de_suporte_fundo.png';

import BandeiraEUA from '../../../assets/eua_pdp.png';
import BandeiraBelgica from '../../../assets/belgica_pdp.png';
import BandeiraBrasil from '../../../assets/brasil_pdp.png';

export default [
  {
    title: 'Capa',
    imageSrc: CapaFundo,
    modal: {
      title: 'TECIDO SOFT &amp; CHILL',
      imageTitle: BandeiraEUA,
      width: 30,
      height: 30,
      text: `
        <strong>Material:</strong> Mix de fios respiráveis de poliéster
        e polietileno com elastano
        <br />
        <br />
        - Toque sutil e elástico na medida certa
        <br />
        <br />
        - Altamente respirável e contendo polietileno para prevenir o aquecimento do corpo
        <br />
        <br />
        - Alta gramatura que garante a performance e durabilidade das camadas de conforto
        <br />
        <br />
        - Por não ser um tratamento e sim parte do tecido, as propriedades não se perdem
        com o tempo
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'Camada <br /> de conforto',
    imageSrc: CamadaDeConfortoFundo,
    modal: {
      title: 'LATEX CLASSIC',
      imageTitle: BandeiraBelgica,
      width: 30,
      height: 30,
      text: `
        <strong>Altura da camada:</strong> 4cm
        de polietileno com elastano
        <br />
        <br />
        - Látex nobre e sofisticado, com elasticidade incomparável
        <br />
        <br />
        - Proporciona resiliência e suporte progressivo, com apoio corporal perfeito
        <br />
        <br />
        - Contém pequenas perfurações que aumentam a ventilação, proporcionando refrescância
        <br />
        <br />
        - Alta resistência a pressão, evitando deformação com o passar do tempo
        <br />
        <br />
        - Propriedades hipoalergênicas, antimicrobianas e resistência a ácaros
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'Camada de <br /> aconhego',
    imageSrc: CamadaDeAconchegoFundo,
    modal: {
      title: 'VISCO FRESH',
      width: 30,
      height: 30,
      imageTitle: BandeiraBrasil,
      text: `
        <strong>Altura da camada:</strong> 5cm
        <br />
        <br />
        - Matéria prima premium com gel que contribui para manter a temperatura ideal do colchão
        <br />
        <br />
        - Molda ao formato e peso do corpo
        <br />
        <br />
        - Distribuição de peso uniforme, aliviando pontos de pressão
        <br />
        <br />
        - Absorve ondas de movimento sem deformar
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
        <strong>Altura da camada:</strong> 16cm
        <br />
        <strong>Material:</strong> Poliuretano
        <br />
        <br />
        - Camada de alta densidade e resiliência
        <br />
        <br />
        - Suporte uniforme para toda a superfície
        do colchão
        <br />
        <br />
        - Oferece durabilidade às camadas de conforto
      `,
      buttonText: 'opcão de sistema de SUPORTE HíBRIDO →',
    },
  },
  {
    title: 'SISTEMA de <br /> Suporte HÍBRIDO',
    imageSrc: OpcaoSistemaDeSuporteFundo,
    modal: {
      title: 'SISTEMA DE SUPORTE HÍBRIDO',
      width: 115,
      height: 90,
      text: `
        <strong>Altura da camada:</strong> 17,5cm
        <br />
        <strong>Material:</strong> Poliuretano e molas ensacadas individualmente
        <br />
        <br />
        - Camada transição de espuma de poliuretano de alta densidade uniformiza a distribuição de peso
        <br />
        <br />
        - Substituição do suporte de espuma de alta resiliência por suporte híbrido com molas Leggett & Platt ensacadas individualmente com 15cm de altura, que proporcionam maior maleabilidade ao colchão, aumentando a adaptabilidade às curvaturas do corpo
        <br />
        <br />
        - Sustentação adicional com maior fluxo de ar
        <br />
        <br />
        - Reforço nas bordas em todas as laterais do colchão com molas mais firmes para garantir a uniformidade do suporte em todas a superfície
      `,
      buttonText: 'VOLTAR para O TOUR →',
    },
  },
];
