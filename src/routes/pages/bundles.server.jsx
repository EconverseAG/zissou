import {useShopQuery} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../../components/Layout.server';

import CombosBanner from '../../components/CombosBanner/CombosBanner.client';
import CoralOrBlue from '../../components/CoralOrBlue/CoralOrBlue.client';
import DoubtsProductPage from '../../components/ProductPage/DoubtsProductPage/DoubtsProductPage.client';
import ShelfCoral from '../../components/ShelfCoral/ShelfCoral.client';
import ShelfBlue from '../../components/ShelfBlue/ShelfBlue.client';

const idCoral = `gid://shopify/Product/6581615460546`;
const idBlue = `gid://shopify/Product/6581615362242`;

export default function PhaseOut({country = {isoCode: 'US'}}) {
  const coral = useShopQuery({
    query: QUERY_PRODUCT_BY_ID,
    variables: {
      id: idCoral,
      country: country.isoCode,
    },
    preload: true,
  });

  const blue = useShopQuery({
    query: QUERY_PRODUCT_BY_ID,
    variables: {
      id: idBlue,
      country: country.isoCode,
    },
    preload: true,
  });

  return (
    <Layout>
      <CombosBanner />
      <ShelfCoral content={coral.data.product} />
      <ShelfBlue content={blue.data.product} />
      <DoubtsProductPage />
      <CoralOrBlue />
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
