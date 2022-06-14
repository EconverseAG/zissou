import React, {useMemo} from 'react';
import {Image, Link} from '@shopify/hydrogen/client';

import * as styles from './InstagramZissou.module.scss';

import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';
import instagramData from './InstagramZissouData';

export default function Instagram({title, subtitle, background}) {
  const {isMobile} = useMobile();
  const zissouContext = useZissouProduct();

  const posts = useMemo(() => {
    if (zissouContext?.isSpark) {
      return instagramData.spark.posts;
    }

    if (zissouContext?.isCoral) {
      return instagramData.coral.posts;
    }

    if (zissouContext?.isBlue) {
      return instagramData.blue.posts;
    }

    return instagramData.default.posts;
  }, [zissouContext]);

  return (
    <div
      className={styles.InstagramContainer}
      style={{background: background ? `linear-gradient(${background})` : ''}}
    >
      <strong
        className={styles.InstagramTitle}
        style={{marginBottom: subtitle ? '0' : ''}}
      >
        {title ? title : 'EU AMO E RECOMENDO ZISSOU!'}
      </strong>
      {subtitle && <span className={styles.InstagramSubtitle}>{subtitle}</span>}
      <div className={styles.InstagramPosts}>
        <div className={styles.BigPost}>
          <Link to={posts[0].url} target="_blank">
            <Image
              src={posts[0].image}
              width={isMobile ? '285' : '376'}
              height={isMobile ? '310' : '410'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
        </div>
        <div className={styles.SmallPost}>
          {posts.slice(1, posts.length).map((post) => (
            <Link key={post.url} to={post.url} target="_blank">
              <Image
                src={post.image}
                width={isMobile ? '136' : '180'}
                height={isMobile ? '148' : '196'}
                className={styles.Post}
                loading={'lazy'}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
