import gql from 'graphql-tag';
import {useShopQuery, CacheDays} from '@shopify/hydrogen';

export default function Article({params, pathname}) {
  const articleHandle = params.handle;
  const blogHandle = pathname.split('/')[2];

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

  return (
    <>
      <h1>{article.title}</h1>
      <article
        dangerouslySetInnerHTML={{__html: article.contentHtml}}
      ></article>
    </>
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
