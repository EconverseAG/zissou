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
