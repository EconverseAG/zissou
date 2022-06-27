import {Suspense} from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, Route, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import shopifyConfig from '../shopify.config';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import CartProvider from './components/Cart/CartProvider.client';
import Product from './routes/products/[handle].server';
import Home from './routes/index.server';
import Tags from './components/Tags/Tags.client';
import ZissouLoading from './components/ZissouLoading';

function App(props) {
  const redirectOnIncludeMatch = (redirectTo, redirectList) => {
    redirectList.forEach((item) => {
      if (props.pathname.includes(item)) {
        return props.response.redirect(redirectTo, 301);
      }
    });
  };

  const redirectOnExactMatch = (redirectTo, redirectList) => {
    redirectList.forEach((item) => {
      if (props.pathname === item) {
        return props.response.redirect(redirectTo, 301);
      }
    });
  };

  redirectOnIncludeMatch('/pages/colchoes-zissou', [
    '/products/colchoes-zissou',
    '/products/colchao-zissou',
    'colchao-solteiro-188x88-premium-e-na-zissou',
    'pages/o-melhor-colchao-viscoelastico-do-mercado',
    'pages/nao-sabe-qual-o-melhor-colchao-conheca-o-colchao-zissou',
    'pages/comprar-colchao-solteiro-80-cm-largura-zissou',
    'pages/colchao-de-mola-de-casal-descubra-o-colchao-zissou',
    'pages/colchao-casal-d45-descubra-o-colchao-zissou',
    'pages/preco-de-colchao-casal-descubra-o-colchao-zissou',
    'pages/promocao-colchao-casal-descubra-o-colchao-zissou',
    'pages/preco-colchao-queen-size-descubra-o-colchao-zissou',
    'pages/oferta-de-colchoes-descubra-o-colchao-zissou',
    'pages/preco-de-colchao-de-casal-descubra-o-colchao-zissou-1',
    'pages/colchao-a-vacuo-descubra-o-colchao-zissou',
    'pages/comprar-box-para-colchao-de-solteiro-premium-zissou',
    'pages/confira-a-altura-colchao-solteiro-premium-zissou',
    'pages/o-melhor-colchao-solteiro-especial-e-na-zissou',
    'pages/colchao-de-molas-descubra-o-colchao-zissou-2',
    'pages/quanto-custa-um-colchao-de-casal-zissou',
    'pages/comprei-um-colchao-e-nao-gostei-posso-devolver-zissou',
    'pages/colchao-casal-mola-ensacada-d45-descubra-o-colchao-zissou',
    'pages/colchao-semi-ortopedico-descubra-o-colchao-zissou',
    'pages/os-melhores-colchoes-estao-aqui-zissou',
    'pages/o-melhor-colchao-casal-de-espuma',
    'pages/comprar-colchao-solteiro-fino-zissou',
    'pages/nao-sabe-qual-melhor-colchao-confira-o-colchao-zissou',
    'pages/venda-de-colchoes-zissou',
    'pages/preco-de-colchao-de-casal-descubra-o-colchao-zissou',
    'pages/colchao-mola-descubra-o-colchao-zissou',
    'pages/valor-de-colchao-premium-descubra-o-colchao-zissou-1',
    'pages/comprar-colchao-de-casal-premium-e-na-zissou',
    'pages/colchao-preco-descubra-o-colchao-zissou',
    'pages/comprar-colchao-casal-padrao-zissou',
    'pages/colchao-mola-solteiro-descubra-o-colchao-zissou',
    'pages/colchao-de-solteiro-preco-descubra-o-colchao-zissou',
    'pages/o-melhor-colchao-solteiro-1-88x88-premium-e-na-zissou',
    'blogs/faq/onde-o-colchao-zissou-e-fabricado',
    'blogs/faq/quais-tamanhos-disponiveis-do-colchao-zissou',
    'blogs/faq/uma-vez-retirado-o-colchao-zissou-da-caixa-e-possivel-coloca-lo-de-volta',
    'blogs/faq/qual-o-peso-suportado-por-um-colchao-zissou',
    'blogs/faq/colchao-de-solteiro-o-que-e',
    'blogs/faq/preciso-virar-o-colchao-zissou-regularmente',
  ]);

  redirectOnExactMatch('/pages/100dias', ['/pages/zissou-100-dias']);

  redirectOnIncludeMatch('/products/jogo-de-lencol-zissou', [
    'blogs/faq/quais-sao-os-diferenciais-do-lencol-zissou',
    'blogs/faq/qual-e-a-composicao-do-lencol-zissou',
    'products/par-de-fronhas-zissou',
    'blogs/faq/como-lavar-o-lencol-zissou',
    'blogs/faq/onde-experimentar-o-lencol-zissou',
  ]);

  redirectOnIncludeMatch('/products/travesseiro-zissou', [
    'blogs/faq/tenho-um-problema-com-o-meu-travesseiro-como-aciono-a-assistencia-tecnica',
    'blogs/faq/e-se-eu-quiser-experimentar-o-travesseiro-zissou-antes-de-comprar',
  ]);

  redirectOnIncludeMatch('/products/toca-zissou', [
    'blogs/faq/como-funciona-a-garantia-da-toca-zissou',
    'blogs/faq/qual-a-diferenca-com-relacao-aos-concorrentes-qual-o-diferencial-da-toca-zissou',
    'blogs/faq/o-que-acontece-se-meu-cachorro-fizer-xixi-na-toca-zissou',
    'blogs/faq/quais-sao-as-partes-lavaveis-da-toca-zissou',
    'blogs/faq/posso-comprar-a-toca-zissou-para-o-meu-gato',
  ]);

  redirectOnIncludeMatch('/products/duvet-enchimento-zissou', [
    'blogs/faq/o-duvet-zissou-se-compara-a-um-duvet-de-quantos-fios',
    'blogs/faq/qual-e-a-composicao-do-duvet-e-enchimento-zissou',
  ]);

  redirectOnIncludeMatch('/pages/casa-zissou', [
    'blogs/faq/a-zissou-tem-loja-fisica',
  ]);

  if (
    props.pathname.includes('colchao-zissou-spark-hibrido') ||
    props.pathname.includes('colchao-zissou-coral-hibrido-2')
  ) {
    return props.response.redirect('/products/colchao-zissou-spark', 301);
  }

  if (
    props.pathname.includes('colchao-zissou-coral-hibrido-10-off') ||
    props.pathname.includes('/collections/all/coral') ||
    props.pathname.includes('colchao-zissou-coral-hibrido-encomenda')
  ) {
    return props.response.redirect(
      '/products/colchao-zissou-coral-original',
      301,
    );
  }

  if (props.pathname.includes('travesseiro-zissou-lavavel')) {
    return props.response.redirect('/products/travesseiro-zissou', 301);
  }

  if (
    props.pathname.includes('jogo-de-lencol-bambu-cinza-zissou') ||
    props.pathname.includes('fronha-bambu-cinza-zissou') ||
    props.pathname.includes('par-de-fronhas-bambu-cinza-zissou-0-53-x-0-73-cm')
  ) {
    return props.response.redirect('/products/jogo-de-lencol-zissou', 301);
  }

  if (
    props.pathname === '/products/duvet-zissou' ||
    props.pathname.includes('duvet-bambu-cinza-zissou') ||
    props.pathname.includes(
      '/collections/produtos-do-pos/products/duvet-enchimento-bambu-cinza-zissou',
    )
  ) {
    return props.response.redirect('/products/duvet-enchimento-zissou', 301);
  }

  if (props.pathname.includes('/collections/all')) {
    return props.response.redirect('/pages/colchoes-zissou', 301);
  }

  if (
    props.pathname === '/pages/quem-somos' ||
    props.pathname === '/pages/atendimento' ||
    props.pathname === '/pages/retomadas' ||
    props.pathname === '/faq/como-nasceu-a-zissou' ||
    props.pathname === '/faq/o-site-e-seguro' ||
    props.pathname === '/pages/doacao' ||
    props.pathname.includes('blogs/faq/o-site-e-seguro')
  ) {
    return props.response.redirect('/', 301);
  }

  return (
    <Suspense fallback={<ZissouLoading />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <CartProvider>
          <Tags pathname={props.pathname} />
          <DefaultSeo />
          <Router>
            <FileRoutes routes={props.routes} />
            <Route path="/" page={<Home />} />
            <Route path="/products/:handle" page={<Product />} />
            <Route path="*" page={<NotFound />} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {shopifyConfig, routes});
