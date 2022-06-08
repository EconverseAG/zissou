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

import Privacy from '../../assets/privacy_policy.png';

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
          <Image src={Privacy} width={1920} height={200} />
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
                <span>{article.excerpt}</span>
              </div>
            </div>
            <Link
              to={`/blogs/${encodeURIComponent(
                article.blog.handle,
              )}/${encodeURIComponent(article.handle)}`}
              className={styles.ArticlePostReadMore}
            >
              LER MAIS →
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
      articles(first: 10) {
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
