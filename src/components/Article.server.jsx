import gql from 'graphql-tag';
import {useShopQuery, CacheDays} from '@shopify/hydrogen';
import Layout from './Layout.server';

export default function Article({params, pathname, response}) {
  const articleHandle = params.handle;
  const blogHandle = pathname.split('/')[2];

  response.cache(CacheDays());

  const {
    data: {blog},
  } = useShopQuery({
    query: ARTICLES_QUERY,
    variables: {
      blogHandle,
      articleHandle,
    },
    cache: CacheDays(),
    preload: true,
  });

  const article = blog.articles.edges[0].node;
  console.log('>>> article', article);

  return (
    <Layout>
      <h1>{article.title}</h1>
      <article
        dangerouslySetInnerHTML={{__html: article.contentHtml}}
      ></article>
    </Layout>
  );
}

const ARTICLES_QUERY = gql`
  query blogQuery($blogHandle: String, $articleHandle: String) {
    blog(handle: $blogHandle) {
      id
      articles(query: $articleHandle, first: 1) {
        edges {
          node {
            handle
            title
            contentHtml
          }
        }
      }
    }
  }
`;
