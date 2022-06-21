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
  if (props.pathname === '/products/colchoes-zissou') {
    return props.response.redirect(`/pages/colchoes-zissou`, 301);
  }

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
