import Layout from '../components/Layout.server';

import {CacheDays} from '@shopify/hydrogen';
import Home from '../components/Home.client';

export default function Index({response}) {
  response.cache(CacheDays());

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
