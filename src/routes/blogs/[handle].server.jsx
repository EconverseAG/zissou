import gql from 'graphql-tag';
import {
  useShopQuery,
  CacheDays,
  Link,
  flattenConnection,
  useRouteParams,
} from '@shopify/hydrogen';

export default function ArticlesIndex() {
  const {handle} = useRouteParams();

  const {data} = useShopQuery({
    query: ARTICLES_QUERY,
    cache: CacheDays(),
    preload: true,
    variables: {
      handle,
    },
  });

  const articles = flattenConnection(data.blog.articles);
  const title = data.blog.title;

  return (
    <>
      <h1>{title}</h1>
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
  query blogQuery($handle: String) {
    blog(handle: $handle) {
      id
      title
      seo {
        description
      }
      articles(first: 6) {
        edges {
          node {
            title
            handle
            blog {
              handle
            }
            image {
              url
              width
              height
            }
            excerpt
          }
        }
      }
    }
  }
`;
