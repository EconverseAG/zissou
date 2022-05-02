import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './ZissouProductIsHybrid.module.scss';

import HybridColchao from '../../assets/hybrid-colchao.png';

export default function ZissouProductIsHybrid({isHybrid, setIsHybrid}) {
  const {isMobile} = useMobile();
  return (
    <div className={styles.ZissouProductIsHybridContainer}>
      <strong className={styles.IsHybridTitle}>
        {isMobile ? 'Adicionar suporte extra' : 'Adicionar suporte híbrido'}
      </strong>
      <div
        className={styles.toggleWrapper}
        style={{
          borderRadius: isHybrid ? '33px 33px 0px 0px' : '33px',
          height: isMobile && isHybrid ? '70px' : null,
        }}
      >
        <div className={styles.container}>
          <label className={styles.switch} htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => setIsHybrid(!isHybrid)}
            />
            <div className={`${styles.slider} ${styles.round}`}></div>
          </label>
        </div>
        <span className={styles.toggleWrapperTitle}>
          Suporte Híbrido {isMobile && <br />} (espuma + molas)
          {isHybrid && <br />}
          {isHybrid ? (
            <strong className={styles.Bigger}>+ R$ 1.100,00</strong>
          ) : (
            ''
          )}
        </span>
      </div>
      {isHybrid && (
        <div
          className={styles.selectedHybrid}
          style={{borderRadius: isHybrid && '0px 0px 33px 33px'}}
        >
          <div className={styles.selectedHybridLeft}>
            <span className={styles.LeftText}>
              Substituição do suporte de espuma de alta resiliência por{' '}
              <strong className={styles.Bolder}>
                sistema L&P híbrido com espuma de alta qualidade e molas Caliber
                ensacadas individualmente
              </strong>
            </span>
            <br />
            <span className={styles.LeftText}>
              ✓ 5cm a mais de altura, com total de 25cm
            </span>
            <br />
            <span className={styles.LeftText}>
              ✓ Maior adaptabilidade às curvas do corpo
            </span>
            <br />
            <span className={styles.LeftText}>
              ✓ Melhor circulação interna de ar
            </span>
          </div>
          <div className={styles.selectedHybridRight}>
            <Image
              src={HybridColchao}
              width={isMobile ? 170 : 106}
              height={isMobile ? 264 : 177}
            />
          </div>
        </div>
      )}
    </div>
  );
}
