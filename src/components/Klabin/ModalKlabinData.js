import parseUrl from '../../helpers/parseUrl';

const FlorestaImage = parseUrl('floresta-modal.png');
const BiodiversidadeImage = parseUrl('biodiversidade-modal.png');
const ProducaoImage = parseUrl('producao-modal.png');
const RelacaoImage = parseUrl('relacaoSono-modal.png');
const PesquisaImage = parseUrl('Pesquisa-modal.png');
const ProdutosImage = parseUrl('Produtos-modal.png');
const ShippingImage = parseUrl('Shipping-modal.png');
const ImaginacaoImage = parseUrl('Imaginacao-modal.png');

export default [
  {
    name: 'Floresta',
    imageSrc: FlorestaImage,
    widthImg: '28',
    heightImg: '63',
    title: 'ÁRVORES E <br /> MANEJO FLORESTAL',
    text: 'Pioneira no manejo florestal que mescla florestas plantadas de pínus e eucalipto e matas nativas preservadas',
  },
  {
    name: 'Biodiversidade',
    imageSrc: BiodiversidadeImage,
    widthImg: '50',
    heightImg: '38',
    title: 'PROTEÇÃO DA <br /> BIODIVERSIDADE <br /> E COMUNIDADE',
    text: 'Pesquisa e conservação da fauna e da flora, e apoio à saúde, educação, meio ambiente e esportes nas comunidades locais',
  },
  {
    name: 'Producao',
    imageSrc: ProducaoImage,
    widthImg: '46',
    heightImg: '32',
    title: 'PRODUÇÃO <br /> E LOGÍSTICA',
    text: 'Mundialmente conhecida pela eficiência operacional com manejo florestal sustentável, produção de celulose e papel e fabricação das embalagens',
  },
  {
    name: 'RelacaoSono',
    imageSrc: RelacaoImage,
    widthImg: '57',
    heightImg: '40',
    title: 'REDEFININDO <br /> SUA RELAÇÃO <br /> COM O SONO',
    text: 'Intimidade com o consumidor para entender seus comportamentos, necessidades e particularidades na hora de dormir',
  },
  {
    name: 'Pesquisa',
    imageSrc: PesquisaImage,
    widthImg: '21',
    heightImg: '47',
    title: 'PESQUISA E <br /> DESENVOLVIMENTO',
    text: 'Design thinking junto com o consumidor, unindo qualidade, criatividade e alta tecnologia para aterrissar em produtos únicos de sono',
  },
  {
    name: 'Produtos',
    imageSrc: ProdutosImage,
    widthImg: '60',
    heightImg: '38',
    title: 'PRODUTOS <br /> IDEAIS DE SONO',
    text: 'Convergência em produtos campeões de cada categoria de sono, feitos com as melhores matérias primas do mundo',
  },
  {
    name: 'Shipping',
    imageSrc: ShippingImage,
    widthImg: '38',
    heightImg: '47',
    title: 'CHEGANDO <br /> NA SUA CASA',
    text: 'Produtos ideais de sono entregues em embalagens incrivelmente práticas, inovadoras, super-resistentes e sustentáveis',
  },
  {
    name: 'Imaginacao',
    imageSrc: ImaginacaoImage,
    widthImg: '26',
    heightImg: '44',
    title: 'USE SUA <br /> IMAGINAÇÃO',
    text: 'Aproveite ao máximo a sua experiência de unboxing e durma de consciência tranquila porque #AquiTemKlabin',
  },
];
