import parseUrl from '../../../helpers/parseUrl';

const CapaFundo = parseUrl('capablue.png');
const CamadaDeConfortoFundo = parseUrl('camada_de_conforto_blue.png');
const CamadaDeAconchegoFundo = parseUrl('camada_de_aconchego_fundo.png');
const OpcaoSistemaDeSuporteFundo = parseUrl('sistema_de_suporte_blue.png');

const BandeiraEUA = parseUrl('eua_pdp.png');
const BandeiraBelgica = parseUrl('belgica_pdp.png');
const BandeiraBrasil = parseUrl('brasil_pdp.png');

export default [
  {
    title: 'Capa',
    imageSrc: CapaFundo,
    modal: {
      title: 'TECIDO PLUSH &amp; COOL',
      imageTitle: BandeiraEUA,
      width: 30,
      height: 30,
      text: `
        <strong>Material:</strong> Fios de polietileno com alta condutividade térmica adicionando 1cm de conforto ao colchão
        <br />
        <br />
        - Extrai o calor do corpo criando um micro-clima ideal de conforto para uma noite de sono perfeita
        <br />
        <br />
        - Alta gramatura com matelassê, adicionando conforto e maciez extras na superfície
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
      title: 'LATEX PULSE',
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
        - Estrutura celular homogênea, resiliência, suporte progressivo
        <br />
        <br />
        - Maior elasticidade, que aumenta a sensação de impulso na superfície, facilitando a movimentação na cama durante o sono
        <br />
        <br />
        - Propriedades de ventilação potencializadas, que garantem um microclima equilibrado e controle de umidade
        <br />
        <br />
        - Propriedades antimicrobianas e resistência a ácaros
      `,
      buttonText: 'Continuar →',
    },
  },
  {
    title: 'Camada de <br /> aconchego',
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
    title: 'SISTEMA de <br /> Suporte HÍBRIDO',
    imageSrc: OpcaoSistemaDeSuporteFundo,
    modal: {
      title: 'SISTEMA DE SUPORTE HÍBRIDO',
      text: `
        <strong>Altura da camada:</strong> 17,5cm
        <br />
        <br />
        - Camada transição de espuma de poliuretano de alta densidade uniformiza a distribuição de peso
        <br />
        <br />
        - Sistema do suporte híbrido com molas ensacadas individualmente com 15cm de altura, que proporcionam maior maleabilidade ao colchão, aumentando a adaptabilidade às curvaturas do corpo
        <br />
        <br />
        - Molas Leggett & Platt com tecnologia de zonamento ergonômico para melhor alinhamento da coluna
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
