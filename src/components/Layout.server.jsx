/* eslint-disable hydrogen/prefer-gql */
import {Suspense} from 'react';
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

import ZissouLoading from './ZissouLoading';

const idTravesseiro = `gid://shopify/Product/7414166585538`;
const idTravesseiroWashable = `gid://shopify/Product/7414166618306`;
const idGrayDuvet = `gid://shopify/Product/7195872231618`;
const idWhiteDuvet = `gid://shopify/Product/4522066083913`;
const idGrayLencol = `gid://shopify/Product/7195869249730`;
const idWhiteLencol = `gid://shopify/Product/2135741923401`;
const idBase = `gid://shopify/Product/7145404399810`;

export default function Layout({children}) {
  const useProductQueryById = (id) =>
    useShopQuery({
      query: QUERY_PRODUCT_BY_ID,
      variables: {
        id,
      },
    });

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

  const travesseiro = useProductQueryById(idTravesseiro);
  const travesseiroWashable = useProductQueryById(idTravesseiroWashable);
  const grayDuvet = useProductQueryById(idGrayDuvet);
  const whiteDuvet = useProductQueryById(idWhiteDuvet);
  const grayLencol = useProductQueryById(idGrayLencol);
  const whiteLencol = useProductQueryById(idWhiteLencol);
  const base = useProductQueryById(idBase);

  return (
    <LocalizationProvider preload="*">
      <div>
        <Suspense fallback={<ZissouLoading />}>
          <Header collections={collections} storeName={storeName} />
          <Cart
            products={{
              travesseiro,
              travesseiroWashable,
              grayDuvet,
              whiteDuvet,
              grayLencol,
              whiteLencol,
              base,
            }}
          />
        </Suspense>
        <main role="main" id="mainContent">
          {children}
        </main>
        <Suspense fallback={<ZissouLoading />}>
          <Footer />
        </Suspense>
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

const QUERY_PRODUCT_BY_ID = gql`
  query getProductById($id: ID!) {
    product: product(id: $id) {
      variants(first: 20) {
        edges {
          node {
            title
            metafields(first: 20) {
              edges {
                node {
                  id
                  type
                  namespace
                  key
                  value
                  createdAt
                  updatedAt
                  description
                  reference {
                    __typename
                    ... on MediaImage {
                      id
                      mediaContentType
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
              }
            }
          }
        }
      }
    }
  }
`;
