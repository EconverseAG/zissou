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

const idTravesseiro = `gid://shopify/Product/7414166585538`;
const idTravesseiroWashable = `gid://shopify/Product/7414166618306`;
const idGrayDuvetCover = `gid://shopify/Product/7195872362690`;
const idWhiteDuvetCover = `gid://shopify/Product/4493894418505`;
const idGrayLencol = `gid://shopify/Product/7195869249730`;
const idWhiteLencol = `gid://shopify/Product/2135741923401`;
const idBase = `gid://shopify/Product/7145404399810`;
const idCoralHybrid = `gid://shopify/Product/7406293024962`;
const idSparkHybrid = `gid://shopify/Product/7406293221570`;
const idCoral = `gid://shopify/Product/7406293123266`;
const idSpark = `gid://shopify/Product/7406293352642`;

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

  let travesseiro,
    travesseiroWashable,
    duvetFilling,
    grayDuvetCover,
    whiteDuvetCover,
    grayLencol,
    whiteLencol,
    coralHybrid,
    sparkHybrid,
    coral,
    spark,
    base;

  switch (handle) {
    case 'travesseiro-zissou':
      travesseiro = useProductQueryById(idTravesseiro);
      travesseiroWashable = useProductQueryById(idTravesseiroWashable);
      break;
    case 'colchao-zissou-coral-original':
      coral = useProductQueryById(idCoral);
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
    case 'colchao-zissou-spark':
      sparkHybrid = useProductQueryById(idSparkHybrid);
      base = useProductQueryById(idBase);
      travesseiroWashable = useProductQueryById(idTravesseiroWashable);
      whiteLencol = useProductQueryById(idWhiteLencol);
      spark = useProductQueryById(idSpark);
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
          travesseiro={travesseiro?.data.product}
          travesseiroWashable={travesseiroWashable?.data.product}
          duvetFilling={duvetFilling?.data.product}
          grayDuvetCover={grayDuvetCover?.data.product}
          whiteDuvetCover={whiteDuvetCover?.data.product}
          grayLencol={grayLencol?.data.product}
          whiteLencol={whiteLencol?.data.product}
          base={base?.data.product}
          coralHybrid={coralHybrid?.data.product}
          sparkHybrid={sparkHybrid?.data.product}
          coral={coral?.data.product}
          spark={spark?.data.product}
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
