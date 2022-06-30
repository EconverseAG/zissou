import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './SleepAndLive.module.scss';

import LogoSpark from '../../assets/spark-logo.png';
import ColchaoSpark from '../../assets/colchao_spark.png';
import ColchaoCoral from '../../assets/colchao_coral.webp';
import ColchaoBlue from '../../assets/colchao_blue.webp';
import useMobile from '../../hooks/useMobile';

export default function SleepAndLive() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.SleepAndLiveContainer}>
      <span>Dormir & Viver</span>
      <div className={styles.SleepAndLiveContent}>
        {!isMobile && (
          <div className={`${styles.Prod} ${styles.Spark}`}>
            <p className={styles.Flag}>NOVIDADE</p>
            <Image
              src={LogoSpark}
              width={114}
              height={37}
              className={styles.ProdTitle}
            />
            <span className={styles.ProdSubtitle}>Onde tudo começa</span>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.ProdImage}
            >
              <Image
                src={ColchaoSpark}
                width="228"
                height="82"
                loading={'lazy'}
              />
            </Link>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.ProdLink}
            >
              Colchão Zissou Spark
            </Link>
          </div>
        )}
        <div className={`${styles.Prod} ${styles.Coral}`}>
          <p className={styles.Flag}>
            Mais <br /> vendido
          </p>
          <strong className={styles.ProdTitle}>Coral</strong>
          <span className={styles.ProdSubtitle}>A evolução do sono</span>
          <Link
            to="/products/colchao-zissou-coral-original"
            className={styles.ProdImage}
          >
            <Image
              src={ColchaoCoral}
              width="228"
              height="82"
              loading={'lazy'}
            />
          </Link>
          <Link
            to="/products/colchao-zissou-coral-original"
            className={styles.ProdLink}
          >
            Colchão Zissou Coral
          </Link>
        </div>
        <div className={`${styles.Prod} ${styles.Blue}`}>
          <p className={styles.Flag}>
            Mais <br /> avançado
          </p>
          <strong className={styles.ProdTitle}>Blue</strong>
          <span className={styles.ProdSubtitle}>Liberte seus sonhos</span>
          <Link to="/products/colchao-zissou-blue" className={styles.ProdImage}>
            <Image src={ColchaoBlue} width="228" height="82" loading={'lazy'} />
          </Link>
          <Link to="/products/colchao-zissou-blue" className={styles.ProdLink}>
            Colchão Zissou Blue
          </Link>
        </div>
        {isMobile && (
          <div className={`${styles.Prod} ${styles.Spark}`}>
            <p className={styles.Flag}>NOVIDADE</p>
            <Image
              src={LogoSpark}
              width={114}
              height={37}
              className={styles.ProdTitle}
            />
            <span className={styles.ProdSubtitle}>Onde tudo começa</span>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.ProdImage}
            >
              <Image
                src={ColchaoSpark}
                width="228"
                height="82"
                loading={'lazy'}
              />
            </Link>
            <Link
              to="/products/colchao-zissou-spark"
              className={styles.ProdLink}
            >
              Colchão Zissou Spark
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
