import {Image, Link} from '@shopify/hydrogen/client';

import Post1 from '../../assets/post-1.png';
import Post2 from '../../assets/post-2.png';
import Post3 from '../../assets/post-3.png';
import Post4 from '../../assets/post-4.png';
import Post5 from '../../assets/post-5.png';
import Post6 from '../../assets/post-6.png';
import Post7 from '../../assets/post-7.png';
import Post8 from '../../assets/post-8.png';
import Post9 from '../../assets/post-9.png';

import PostBlue1 from '../../assets/post-blue-1.png';
import PostBlue2 from '../../assets/post-blue-2.png';
import PostBlue3 from '../../assets/post-blue-3.png';
import PostBlue4 from '../../assets/post-blue-4.png';
import PostBlue5 from '../../assets/post-blue-5.png';
import PostBlue6 from '../../assets/post-blue-6.png';
import PostBlue7 from '../../assets/post-blue-7.png';
import PostBlue8 from '../../assets/post-blue-8.png';
import PostBlue9 from '../../assets/post-blue-9.png';

import PostCoral1 from '../../assets/post-coral-1.png';
import PostCoral2 from '../../assets/post-coral-2.png';
import PostCoral3 from '../../assets/post-coral-3.png';
import PostCoral4 from '../../assets/post-coral-4.png';
import PostCoral5 from '../../assets/post-coral-5.png';
import PostCoral6 from '../../assets/post-coral-6.png';
import PostCoral7 from '../../assets/post-coral-7.png';
import PostCoral8 from '../../assets/post-coral-8.png';
import PostCoral9 from '../../assets/post-coral-9.png';

import * as styles from './InstagramZissou.module.scss';

import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';

export default function Instagram({title, subtitle, background}) {
  const {isMobile} = useMobile();
  const zissouContext = useZissouProduct();

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
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral1
                  : zissouContext?.isBlue
                  ? PostBlue1
                  : Post1
              }
              width={isMobile ? '285' : '376'}
              height={isMobile ? '310' : '410'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
        </div>
        <div className={styles.SmallPost}>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral2
                  : zissouContext?.isBlue
                  ? PostBlue2
                  : Post2
              }
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral3
                  : zissouContext?.isBlue
                  ? PostBlue3
                  : Post3
              }
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral4
                  : zissouContext?.isBlue
                  ? PostBlue4
                  : Post4
              }
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral5
                  : zissouContext?.isBlue
                  ? PostBlue5
                  : Post5
              }
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral6
                  : zissouContext?.isBlue
                  ? PostBlue6
                  : Post6
              }
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral7
                  : zissouContext?.isBlue
                  ? PostBlue7
                  : Post7
              }
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral8
                  : zissouContext?.isBlue
                  ? PostBlue8
                  : Post8
              }
              width={isMobile ? '136' : '180'}
              height={isMobile ? '148' : '196'}
              className={styles.Post}
              loading={'lazy'}
            />
          </Link>
          <Link to="https://www.instagram.com/zissoubr/" target="_blank">
            <Image
              src={
                zissouContext?.isCoral
                  ? PostCoral9
                  : zissouContext?.isBlue
                  ? PostBlue9
                  : Post9
              }
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
