import {useState, useCallback, useMemo} from 'react';
import {Image} from '@shopify/hydrogen';

import * as styles from './DuvetInside.module.scss';

import useMobile from '../../hooks/useMobile';

import Inside from '../../assets/duvet-inside.png';
import InsideDuvet from '../../assets/duvet-inside-duvet.png';
import InsideEnchimento from '../../assets/duvet-inside-enchimento.png';

function DuvetInside() {
  const [showDuvetInfo, setShowDuvetInfo] = useState(false);
  const [showEnchimentoInfo, setEnchimentoInfo] = useState(false);

  const {isMobile} = useMobile();

  const insideImageSource = useMemo(() => {
    let src = Inside;
    if (showDuvetInfo) {
      src = InsideDuvet;
    } else if (showEnchimentoInfo) {
      src = InsideEnchimento;
    }

    return src;
  }, [showDuvetInfo, showEnchimentoInfo]);

  const handleBubbleClick = useCallback((e) => {
    const {info} = e.target.dataset;

    setShowDuvetInfo(info === 'duvet');
    setEnchimentoInfo(info === 'enchimento');
  }, []);

  const renderDuvetInfo = useCallback(() => {
    if (!showDuvetInfo) return;

    return (
      <div className={styles.duvetInsideBubbleContent} data-info="duvet">
        <h3>Duvet</h3>
        <p>
          O Duvet, feito de polpa de bambu, é a capa que reveste o enchimento
          conferindo um toque muito macio semelhante à seda. Oferece uma
          sensação incrível, com toque suave e delicioso, que abraça seu corpo
          com maciez e conforto tornando a sua cama ainda mais aconchegante
        </p>
      </div>
    );
  }, [showDuvetInfo]);

  const renderEnchimentoInfo = useCallback(() => {
    if (!showEnchimentoInfo) return;

    return (
      <div className={styles.duvetInsideBubbleContent} data-info="enchimento">
        <h3>Enchimento</h3>
        <p>
          O Enchimento potencializa a experiência do seu Duvet complementando o
          aconchego ideal através do seu tecido externo em 100% algodão e seu
          preenchimento por uma manta de fibra siliconizada
        </p>
      </div>
    );
  }, [showEnchimentoInfo]);

  return (
    <div className={`${styles.duvetInside} ${isMobile ? styles.mobile : ''}`}>
      <h2>Por dentro do aconchego</h2>
      {isMobile && renderDuvetInfo()}
      <div className={styles.duvetInsideImage}>
        <Image
          src={insideImageSource}
          width={isMobile ? 396 : 973}
          height={isMobile ? 348 : 853}
          loading={'lazy'}
        />
        <button
          data-info="duvet"
          className={styles.duvetInsideBubble}
          onClick={handleBubbleClick}
        >
          {!isMobile && renderDuvetInfo()}
        </button>
        <button
          data-info="enchimento"
          className={styles.duvetInsideBubble}
          onClick={handleBubbleClick}
        >
          {!isMobile && renderEnchimentoInfo()}
        </button>
      </div>
      {isMobile && renderEnchimentoInfo()}
    </div>
  );
}

export default DuvetInside;
