import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, Route, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import shopifyConfig from '../shopify.config';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import ZissouLoading from './components/ZissouLoading';
import CartProvider from './components/Cart/CartProvider.client';

function App({routes}) {
  return (
    <Suspense fallback={<ZissouLoading />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <CartProvider>
          <DefaultSeo />
          <Router>
            <Suspense fallback={<ZissouLoading />}>
              <FileRoutes routes={routes} />
              <Route path="*" page={<NotFound />} />
            </Suspense>
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {shopifyConfig, routes});
