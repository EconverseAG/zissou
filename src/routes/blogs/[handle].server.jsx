import gql from 'graphql-tag';
import {
  useShopQuery,
  CacheDays,
  Link,
  flattenConnection,
  useRouteParams,
  Image,
} from '@shopify/hydrogen';

import Layout from '../../components/Layout.server';

import * as styles from './redefinaseusono.module.scss';

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
    <Layout>
      <styles.StyleTag />
      <div className={styles.ArticlesContainer}>
        <div className={styles.PrivacyContentImage}>
          <Image
            src="https://cdn.shopify.com/s/files/1/1526/6199/files/privacy.webp?v=1654833136"
            width={1920}
            height={674}
          />
        </div>
        <h1 className={styles.ArticleTitle}>{title}</h1>
        {articles.map((article) => (
          <Link
            to={`/blogs/${encodeURIComponent(
              article.blog.handle,
            )}/${encodeURIComponent(article.handle)}`}
            key={article.handle}
            className={styles.ArticleCotent}
          >
            <h3 className={styles.ArticlePostTitle}>{article.title}</h3>
            <div className={styles.ArticlePostInfo}>
              <div className={styles.ArticlePostInfoImage}>
                {article.image && (
                  <Image
                    src={article.image.url}
                    width={article.image.width}
                    height={article.image.height}
                  />
                )}
              </div>
              <div className={styles.ArticlePostInfoText}>
                {article.excerpt ? (
                  <span>{article.excerpt}</span>
                ) : (
                  <span className={styles.TextWithoutExcerpt}>
                    {article.content}
                  </span>
                )}
              </div>
            </div>
            <Link
              to={`/blogs/${encodeURIComponent(
                article.blog.handle,
              )}/${encodeURIComponent(article.handle)}`}
              className={styles.ArticlePostReadMore}
            >
              LER MAIS ???
            </Link>
          </Link>
        ))}
      </div>
    </Layout>
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
      articles(sortKey: PUBLISHED_AT, first: 250, reverse: true) {
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
            content
          }
        }
      }
    }
  }
`;
