import {Suspense, lazy} from 'react';
import {useShopQuery, Seo, useRouteParams} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import NotFound from '../../components/NotFound.server';
import Layout from '../../components/Layout.server';
import ZissouLoading from '../../components/ZissouLoading';

const ProductDetails = lazy(() =>
  import('../../components/ProductDetails.client'),
);

const idDuvetFilling = `gid://shopify/Product/4522066083913`;
const idTravesseiroWashable = `gid://shopify/Product/4512182992969`;
const idTravesseiroWashableCustom = `gid://shopify/Product/4512186564681`;
const idGrayDuvetCover = `gid://shopify/Product/7195872362690`;
const idWhiteDuvetCover = `gid://shopify/Product/4493894418505`;
const idGrayLencol = `gid://shopify/Product/7195869249730`;
const idWhiteLencol = `gid://shopify/Product/2135741923401`;
const idBase = `gid://shopify/Product/7145404399810`;
const idCoralHybrid = `gid://shopify/Product/6587140604098`;

export default function Product({country = {isoCode: 'US'}}) {
  const {handle} = useRouteParams();

  const useProductQueryById = (id) =>
    useShopQuery({
      query: QUERY_PRODUCT_BY_ID,
      variables: {
        id,
        country: country.isoCode,
      },
      preload: true,
    });

  const baseProduct = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
      handle,
    },
    preload: true,
  });

  const travesseiroWashable = useProductQueryById(idTravesseiroWashable);
  const travesseiroWashableCustom = useProductQueryById(
    idTravesseiroWashableCustom,
  );
  const duvetFilling = useProductQueryById(idDuvetFilling);
  const grayDuvetCover = useProductQueryById(idGrayDuvetCover);
  const whiteDuvetCover = useProductQueryById(idWhiteDuvetCover);
  const grayLencol = useProductQueryById(idGrayLencol);
  const whiteLencol = useProductQueryById(idWhiteLencol);
  const base = useProductQueryById(idBase);
  const coralHybrid = useProductQueryById(idCoralHybrid);

  if (!baseProduct) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Seo type="product" data={baseProduct.data.product} />
      <Suspense fallback={<ZissouLoading />}>
        <ProductDetails
          travesseiroWashable={travesseiroWashable.data.product}
          travesseiroWashableCustom={travesseiroWashableCustom.data.product}
          duvetFilling={duvetFilling.data.product}
          grayDuvetCover={grayDuvetCover.data.product}
          whiteDuvetCover={whiteDuvetCover.data.product}
          grayLencol={grayLencol.data.product}
          whiteLencol={whiteLencol.data.product}
          base={base.data.product}
          coralHybrid={coralHybrid.data.product}
          product={baseProduct.data.product}
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
      description
      descriptionHtml
      handle
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
            ... on Video {
              mediaContentType
              id
              previewImage {
                url
              }
              sources {
                mimeType
                url
              }
            }
            ... on Model3d {
              mediaContentType
              id
              alt
              mediaContentType
              previewImage {
                url
              }
              sources {
                url
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
      seo {
        description
        title
      }
      title
      variants(first: 250) {
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
            unitPrice {
              amount
              currencyCode
            }
            unitPriceMeasurement {
              measuredType
              quantityUnit
              quantityValue
              referenceUnit
              referenceValue
            }
          }
        }
      }
      vendor
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
      description
      descriptionHtml
      handle
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
            ... on Video {
              mediaContentType
              id
              previewImage {
                url
              }
              sources {
                mimeType
                url
              }
            }
            ... on Model3d {
              mediaContentType
              id
              alt
              mediaContentType
              previewImage {
                url
              }
              sources {
                url
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
      seo {
        description
        title
      }
      title
      variants(first: 250) {
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
            unitPrice {
              amount
              currencyCode
            }
            unitPriceMeasurement {
              measuredType
              quantityUnit
              quantityValue
              referenceUnit
              referenceValue
            }
          }
        }
      }
      vendor
    }
  }
`;
