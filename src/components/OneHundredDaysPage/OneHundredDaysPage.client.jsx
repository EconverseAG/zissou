import {Image} from '@shopify/hydrogen';

import useMobile from '../../hooks/useMobile';
import {LoadingProvider} from '../../hooks/useLoading';

import * as styles from './OneHundredDaysPage.module.scss';
import parseUrl from '../../helpers/parseUrl';

const ColchaoTimeline = parseUrl('colchao-timeline.png');
const ColchaoTimelineMobile = parseUrl('colchao-timeline-mobile.png');
import ChooseYourDestiny from './ChooseYourDestiny';
import WhatCanYouDo from './WhatCanYouDo';

function OneHundredDaysPage() {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
        <h1>
          Você acredita em <strong>amor</strong> à primeira vista?
        </h1>
        <p>
          Nós também. Mas quando se trata do seu sono, siga o conselho dos
          sábios: tome o tempo que você precisar no seu relacionamento para ter
          certeza que encontrou o <strong>par ideal.</strong>
        </p>
        <br />
        <p>
          Experimente a Zissou no seu tempo, do seu jeito, no seu próprio
          espaço. Damos <span>100</span> dias para você viver com seus produtos,
          fazendo o que quiser.
        </p>
        <br />
        <p>
          Assim, dá pra saber direitinho se vocês vão se dar bem de verdade.
          <br /> Veja como é simples:
        </p>
        <Image
          className={styles.timeline}
          src={isMobile ? ColchaoTimelineMobile : ColchaoTimeline}
          width={isMobile ? 437 : 1618}
          height={isMobile ? 754 : 972}
        />

        <WhatCanYouDo />
        <ChooseYourDestiny />
      </div>
    </LoadingProvider>
  );
}

export default OneHundredDaysPage;
