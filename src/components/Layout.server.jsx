import {
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
  CacheHours,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Header from './Header/Header.client';
import Footer from './Footer/Footer.client';
import Cart from '../components/Cart/Cart.client';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export default function Layout({
  children,
  base,
  whiteLencol,
  grayLencol,
  whiteDuvetCover,
  grayDuvetCover,
  travesseiroWashable,
}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numCollections: 3,
    },
    cache: CacheHours(),
    preload: '*',
  });
  const collections = data ? flattenConnection(data.collections) : null;
  const storeName = data ? data.shop.name : '';

  return (
    <LocalizationProvider preload="*">
      <div>
        <Header collections={collections} storeName={storeName} />
        <Cart
          base={base}
          whiteLencol={whiteLencol}
          grayLencol={grayLencol}
          whiteDuvetCover={whiteDuvetCover}
          grayDuvetCover={grayDuvetCover}
          travesseiroWashable={travesseiroWashable}
        />
        <main role="main" id="mainContent" style={{overflowX: 'hidden'}}>
          {children}
        </main>
        <Footer />
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
