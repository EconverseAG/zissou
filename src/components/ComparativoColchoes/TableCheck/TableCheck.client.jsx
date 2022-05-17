import {Image} from '@shopify/hydrogen';

import useMobile from '../../../hooks/useMobile';

import Check from '../../../assets/check-icon.svg';
import CheckBlue from '../../../assets/check-blue.svg';
import Uncheck from '../../../assets/uncheck.svg';

function TableCheck({checked, colorBlue}) {
  const {isMobile} = useMobile();

  return (
    <>
      {checked ? (
        colorBlue ? (
          <Image
            src={CheckBlue}
            width={isMobile ? 18 : 40}
            height={isMobile ? 16 : 37}
          />
        ) : (
          <Image
            src={Check}
            width={isMobile ? 18 : 40}
            height={isMobile ? 16 : 37}
          />
        )
      ) : (
        <Image src={Uncheck} width={isMobile ? 31 : 59} height={3} />
      )}
    </>
  );
}

export default TableCheck;
