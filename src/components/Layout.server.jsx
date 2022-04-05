import {
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
  CacheHours,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Header from './Header/Header.client';
import Footer from './Footer/Footer.server';
import Cart from '../components/Cart/Cart.client';
import {Suspense} from 'react';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export default function Layout({children, hero}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numCollections: 3,
    },
    cache: CacheHours(),
    preload: '*',
  });
  const collections = data ? flattenConnection(data.collections) : null;
  const products = data ? flattenConnection(data.products) : null;
  const storeName = data ? data.shop.name : '';

  return (
    <LocalizationProvider preload="*">
      <div>
        <Suspense fallback={null}>
          <Header collections={collections} storeName={storeName} />
          <Cart />
        </Suspense>
        <main role="main" id="mainContent">
          {hero}
          <div>
            <Suspense fallback={null}>{children}</Suspense>
          </div>
        </main>
        <Footer collection={collections[0]} product={products[0]} />
      </div>
    </LocalizationProvider>
  );
}

const QUERY = gql`
  query layoutContent($numCollections: Int!) {
    shop {
      name
    }
    collections(first: $numCollections) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
    products(first: 1) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
