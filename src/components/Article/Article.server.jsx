import gql from 'graphql-tag';
import {
  useShopQuery,
  CacheDays,
  Image,
  flattenConnection,
} from '@shopify/hydrogen';
import Layout from '../Layout.server';

import * as styles from './Article.module.scss';

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

  const article = flattenConnection(blog.articles);

  return (
    <Layout>
      <styles.StyleTag />
      <div className={styles.PrivacyContentImage}>
        <Image
          src={'https://cdn.shopify.com/s/files/1/1526/6199/files/privacy.webp'}
          width={1920}
          height={674}
        />
      </div>
      <div className={styles.ArticleContainer}>
        <h1 className={styles.ArticleTitle}>{article[0].title}</h1>
        <article
          dangerouslySetInnerHTML={{__html: article[0].contentHtml}}
        ></article>
      </div>
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
