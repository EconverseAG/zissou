import {useShopQuery, CacheDays} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import ComparativoColchoesPage from '../../components/ComparativoColchoes';
import Layout from '../../components/Layout.server';

const idCoral = `gid://shopify/Product/6581615460546`;
const idCoralHybrid = `gid://shopify/Product/6587140604098`;
const idBlue = `gid://shopify/Product/6581615362242`;
const idSpark = `gid://shopify/Product/7406293352642`; //7406293352642
const idSparkHybrid = `gid://shopify/Product/7406293221570`; //7406293352642

export default function ComparativoColchoes({
  country = {isoCode: 'US'},
  response,
}) {
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
  const coralHybrid = useProductQueryById(idCoralHybrid);
  const blue = useProductQueryById(idBlue);
  const spark = useProductQueryById(idSpark);
  const sparkHybrid = useProductQueryById(idSparkHybrid);

  return (
    <Layout>
      <ComparativoColchoesPage
        coral={coral.data.product}
        coralHybrid={coralHybrid.data.product}
        spark={spark.data.product}
        sparkHybrid={sparkHybrid.data.product}
        blue={blue.data.product}
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
