import {Image, Link} from '@shopify/hydrogen/client';

import Post1 from '../../assets/post-1.webp';
import Post2 from '../../assets/post-2.webp';
import Post3 from '../../assets/post-3.webp';
import Post4 from '../../assets/post-4.webp';
import Post5 from '../../assets/post-5.webp';
import Post6 from '../../assets/post-6.webp';
import Post7 from '../../assets/post-7.webp';
import Post8 from '../../assets/post-8.webp';
import Post9 from '../../assets/post-9.webp';

import * as styles from './InstagramZissou.module.scss';

import useMobile from '../../hooks/useMobile';

export default function Instagram({title, subtitle, background}) {
  const {isMobile} = useMobile();
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
          <Link to="/">
            <Image
              src={Post1}
              width={isMobile ? '285' : '376'}
              height={isMobile ? '310' : '410'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
        </div>
        <div className={styles.SmallPost}>
          <Link to="/">
            <Image
              src={Post2}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post3}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post4}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post5}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post6}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post7}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post8}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post9}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
