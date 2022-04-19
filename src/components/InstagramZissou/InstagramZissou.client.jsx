import {Image, Link} from '@shopify/hydrogen';

import Post1 from '../../assets/post-1.png';
import Post2 from '../../assets/post-2.png';
import Post3 from '../../assets/post-3.png';
import Post4 from '../../assets/post-4.png';
import Post5 from '../../assets/post-5.png';
import Post6 from '../../assets/post-6.png';
import Post7 from '../../assets/post-7.png';
import Post8 from '../../assets/post-8.png';
import Post9 from '../../assets/post-9.png';

import * as styles from './InstagramZissou.module.scss';

import useMobile from '../../hooks/useMobile';

export default function Instagram({title, background}) {
  const {isMobile} = useMobile();
  return (
    <div
      className={styles.InstagramContainer}
      style={{background: background ? `linear-gradient(${background})` : ''}}
    >
      <strong className={styles.InstagramTitle}>
        {title ? title : 'EU AMO E RECOMENDO ZISSOU!'}
      </strong>
      <div className={styles.InstagramPosts}>
        <div className={styles.BigPost}>
          <Link to="/">
            <Image
              src={Post1}
              width={isMobile ? '285' : '376'}
              height={isMobile ? '310' : '410'}
              className={styles.Post}
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
            />
          </Link>
          <Link to="/">
            <Image
              src={Post3}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post4}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post5}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post6}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post7}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post8}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
            />
          </Link>
          <Link to="/">
            <Image
              src={Post9}
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
