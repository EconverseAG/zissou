import {useShopQuery, CacheDays} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import Layout from '../../components/Layout.server';
import Colchoes from '../../components/ColchoesZissou/Colchoes.client';

const idCoral = `gid://shopify/Product/7406293123266`;
const idBlue = `gid://shopify/Product/7406292992194`;
const idSpark = `gid://shopify/Product/7406293352642`;

export default function ColchoesZissou({country = {isoCode: 'US'}, response}) {
  response.cache(CacheDays());

  const useProductQueryById = (id) =>
    useShopQuery({
      query: QUERY_PRODUCT_BY_ID,
      variables: {
        id,
        country: country.isoCode,
      },
      preload: true,
      cache: CacheDays(),
    });

  const coral = useProductQueryById(idCoral);
  const blue = useProductQueryById(idBlue);
  const spark = useProductQueryById(idSpark);

  return (
    <Layout>
      <Colchoes
        coral={coral?.data.product}
        blue={blue?.data.product}
        spark={spark?.data.product}
      />
    </Layout>
  );
}

const QUERY_PRODUCT_BY_ID = gql`
  query getProductById($country: CountryCode, $id: ID!)
  @inContext(country: $country) {
    product: product(id: $id) {
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
    }
  }
`;
