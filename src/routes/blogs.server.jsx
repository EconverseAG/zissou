import gql from 'graphql-tag';
import {
  useShopQuery,
  CacheDays,
  Link,
  flattenConnection,
} from '@shopify/hydrogen';

export default function ArticlesIndex() {
  const {data} = useShopQuery({
    query: ARTICLES_QUERY,
    cache: CacheDays(),
    preload: true,
  });

  const articles = flattenConnection(data.articles);

  return (
    <>
      <h1>Articles</h1>
      {articles.map((article) => (
        <Link
          to={`/blogs/${encodeURIComponent(
            article.blog.handle,
          )}/${encodeURIComponent(article.handle)}`}
          key={article.handle}
        >
          {article.title}
        </Link>
      ))}
    </>
  );
}

const ARTICLES_QUERY = gql`
  query articlesList {
    articles(first: 5) {
      edges {
        node {
          title
          handle
          blog {
            handle
          }
        }
      }
    }
  }
`;
