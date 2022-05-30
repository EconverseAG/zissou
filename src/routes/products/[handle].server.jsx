/* eslint-disable react-hooks/rules-of-hooks */
import {Suspense, lazy} from 'react';
import {useShopQuery, Seo, useRouteParams, CacheDays} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import NotFound from '../../components/NotFound.server';
import Layout from '../../components/Layout.server';
import ZissouLoading from '../../components/ZissouLoading';

const ProductDetails = lazy(() =>
  import('../../components/ProductDetails.client'),
);

const idTravesseiroWashable = `gid://shopify/Product/7631661072633`; //4512182992969
const idTravesseiroWashableCustom = `gid://shopify/Product/7631662022905`; //4512186564681
const idGrayDuvetCover = `gid://shopify/Product/7631663235321`; //7195872362690
const idWhiteDuvetCover = `gid://shopify/Product/7631663005945`; // 7631663005945
const idGrayLencol = `gid://shopify/Product/7631109292281`; //7195869249730
const idWhiteLencol = `gid://shopify/Product/7539221987577`; //2135741923401
const idBase = `gid://shopify/Product/7539222249721`; //7145404399810
const idCoralHybrid = `gid://shopify/Product/7631028551929`; //6587140604098

export default function Product({country = {isoCode: 'US'}, response}) {
  const {handle} = useRouteParams();
  response.cache(CacheDays());

  const useProductQueryById = (id) =>
    useShopQuery({
      query: QUERY_PRODUCT_BY_ID,
      variables: {
        id,
        country: country.isoCode,
      },
      cache: CacheDays(),
    });

  const baseProduct = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
      handle,
    },
    cache: CacheDays(),
  });

  let travesseiroWashable,
    travesseiroWashableCustom,
    duvetFilling,
    grayDuvetCover,
    whiteDuvetCover,
    grayLencol,
    whiteLencol,
    coralHybrid,
    base;

  switch (handle) {
    case 'travesseiro-zissou':
      travesseiroWashable = useProductQueryById(idTravesseiroWashable);
      travesseiroWashableCustom = useProductQueryById(
        idTravesseiroWashableCustom,
      );
      break;
    case 'colchao-zissou-coral-original':
      coralHybrid = useProductQueryById(idCoralHybrid);
      base = useProductQueryById(idBase);
      travesseiroWashable = useProductQueryById(idTravesseiroWashable);
      whiteLencol = useProductQueryById(idWhiteLencol);
      break;
    case 'colchao-zissou-blue':
      base = useProductQueryById(idBase);
      travesseiroWashable = useProductQueryById(idTravesseiroWashable);
      whiteLencol = useProductQueryById(idWhiteLencol);
      break;
    case 'duvet-zissou':
      grayDuvetCover = useProductQueryById(idGrayDuvetCover);
      whiteDuvetCover = useProductQueryById(idWhiteDuvetCover);
      break;
    case 'jogo-de-lencol-zissou':
      grayLencol = useProductQueryById(idGrayLencol);
      whiteLencol = useProductQueryById(idWhiteLencol);
      grayDuvetCover = useProductQueryById(idGrayDuvetCover);
      whiteDuvetCover = useProductQueryById(idWhiteDuvetCover);
      break;
  }

  if (!baseProduct) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Seo type="product" data={baseProduct.data.product} />
      <Suspense fallback={<ZissouLoading />}>
        <ProductDetails
          travesseiroWashable={travesseiroWashable?.data.product}
          travesseiroWashableCustom={travesseiroWashableCustom?.data.product}
          duvetFilling={duvetFilling?.data.product}
          grayDuvetCover={grayDuvetCover?.data.product}
          whiteDuvetCover={whiteDuvetCover?.data.product}
          grayLencol={grayLencol?.data.product}
          whiteLencol={whiteLencol?.data.product}
          base={base?.data.product}
          coralHybrid={coralHybrid?.data.product}
          product={baseProduct?.data.product}
        />
      </Suspense>
    </Layout>
  );
}

const QUERY_PRODUCT_BY_ID = gql`
  query getProductById($country: CountryCode, $id: ID!)
  @inContext(country: $country) {
    product: product(id: $id) {
      compareAtPriceRange {
        maxVariantPrice {
          currencyCode
          amount
        }
        minVariantPrice {
          currencyCode
          amount
        }
      }
      id
      media(first: 6) {
        edges {
          node {
            ... on MediaImage {
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
      priceRange {
        maxVariantPrice {
          currencyCode
          amount
        }
        minVariantPrice {
          currencyCode
          amount
        }
      }
      title
      variants(first: 20) {
        edges {
          node {
            availableForSale
            compareAtPriceV2 {
              amount
              currencyCode
            }
            id
            image {
              id
              url
              altText
              width
              height
            }
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
            priceV2 {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            sku
            title
          }
        }
      }
    }
  }
`;

const QUERY = gql`
  query product($country: CountryCode, $handle: String!)
  @inContext(country: $country) {
    product: product(handle: $handle) {
      compareAtPriceRange {
        maxVariantPrice {
          currencyCode
          amount
        }
        minVariantPrice {
          currencyCode
          amount
        }
      }
      id
      media(first: 6) {
        edges {
          node {
            ... on MediaImage {
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
      priceRange {
        maxVariantPrice {
          currencyCode
          amount
        }
        minVariantPrice {
          currencyCode
          amount
        }
      }
      title
      variants(first: 20) {
        edges {
          node {
            availableForSale
            compareAtPriceV2 {
              amount
              currencyCode
            }
            id
            image {
              id
              url
              altText
              width
              height
            }
            metafields(first: 10) {
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
            priceV2 {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            sku
            title
          }
        }
      }
    }
  }
`;
