import {Suspense, lazy} from 'react';
import Layout from '../components/Layout.server';

import {CacheDays} from '@shopify/hydrogen';
import Home from '../components/Home.client';

import ZissouLoading from '../components/ZissouLoading';

export default function Index({response}) {
  response.cache(CacheDays());

  return (
    <Layout>
      <Suspense fallback={<ZissouLoading />}>
        <Home />
      </Suspense>
    </Layout>
  );
}
