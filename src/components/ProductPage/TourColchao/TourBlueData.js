import CapaFundo from '../../../assets/capablue.png';
import CamadaDeConfortoFundo from '../../../assets/camada_de_conforto_blue.png';
import CamadaDeAconchegoFundo from '../../../assets/camada_de_aconhego.png';
import OpcaoSistemaDeSuporteFundo from '../../../assets/opcao_sistema_de_suporte_fundo.png';

import BandeiraEUA from '../../../assets/eua_pdp.png';
import BandeiraBelgica from '../../../assets/belgica_pdp.png';
import BandeiraBrasil from '../../../assets/brasil_pdp.png';
import Legget from '../../../assets/selo-legget.png';

export default [
  {
    title: 'Capa',
    imageSrc: CapaFundo,
    modal: {
      title: 'Tecido CORAL premium <br> COM COOLING',
      imageTitle: BandeiraEUA,
      width: 30,
      height: 30,
      text: `
        <strong>Material:</strong> Fios de polietileno com alta condutividade térmica adicionando
        1cm de conforto ao colchão
        <br />
        <br />
        - Extrai o calor do corpo criando um micro-clima ideal de conforto para uma noite de sono perfeita
        <br />
        <br />
        - Alta gramatura com matelassê, adicionando conforto e maciez extras na superfície e firmeza nas bordas
        <br />
        <br />
        - Resistência e durabilidade com preservação das propriedades do tecido
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'Camada <br /> de conforto',
    imageSrc: CamadaDeConfortoFundo,
    modal: {
      title: 'Látex Pulse',
      imageTitle: BandeiraBelgica,
      width: 30,
      height: 30,
      text: `
        <strong>Altura da camada:</strong> 4cm
        <br />
        <br />
        - Certificações LGA, Öko-Tex Standard 100 e Eurolatex Eco-Standard
        <br />
        <br />
        - Possui estrutura celular homogênea, o que o torna verdadeiramente único como camada de conforto e promove uma excelente capacidade de conservação de suas propriedades 
        <br />
        <br />
        - Maior elasticidade, que aumenta a sensação de impulso na superfície, facilitando a movimentação na cama durante o sono
        <br />
        <br />
        -Propriedades de ventilaçã potencializadas, que garantem um microclima perfeitamente equilibrado e controle de umidade otimizado
        <br />
        <br />
        - Proporciona resiliência, suporte progressivo e a durabilidade do colchão
        <br />
        <br />
        - Possui propriedades antimicrobianas e resistência a ácaros
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'Camada de <br /> aconhego',
    imageSrc: CamadaDeAconchegoFundo,
    modal: {
      title: 'VISCOELÁSTICO DE MEMÓRIA RESPONSIVA',
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
    title: 'Opção de <br /> SISTEMA de <br /> Suporte HÍBRIDO',
    imageSrc: OpcaoSistemaDeSuporteFundo,
    modal: {
      title: 'SISTEMA DE SUPORTE HÍBRIDO LEGGETT & PLATT',
      width: 115,
      height: 90,
      imageTitle: Legget,
      text: `
        <strong>Altura da camada:</strong> 17,5cm
        <br />
        <br />
        Poliuretano e molas ensacadas individualmente
        <br />
        <br />
        - Camada transição de espuma de poliuretano de alta densidade uniformiza a distribuição de peso
        <br />
        <br />
        - Sistema de molas Leggett & Platt com zonas ergonômicas para melhor alinhamento da coluna
        <br />
        <br />
        - Molas ensacadas individualmente, com 15cm de altura, proporcionam maior adaptabilidade à curvatura do corpo
        <br />
        <br />
        - Sustentação adicional com maior fluxo de ar
      `,
      buttonText: 'VOLTAR para O TOUR →',
    },
  },
];
