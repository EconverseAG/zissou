import {useShopQuery, Seo, CacheDays} from '@shopify/hydrogen';
import gql from 'graphql-tag';

/**
 * A server component that fetches a `shop.name` and sets default values and templates for every page on a website
 */
export default function DefaultSeo() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: QUERY,
    cache: CacheDays(),
    preload: '*',
  });

  return (
    <>
      <Seo
        type="defaultSeo"
        data={{
          title: name,
          description,
          titleTemplate: `${name} | %s`,
        }}
      />
      <Seo
        type="homepage"
        data={{
          title: 'Dormir & Viver',
        }}
      />
    </>
  );
}

const QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
