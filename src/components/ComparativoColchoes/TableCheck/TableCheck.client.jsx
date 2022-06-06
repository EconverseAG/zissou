import {Image} from '@shopify/hydrogen';

import useMobile from '../../../hooks/useMobile';

import Uncheck from '../../../assets/uncheck.svg';
import {useMemo} from 'react';

function TableCheck({checked, colorBlue, colorSpark}) {
  const {isMobile} = useMobile();

  const color = useMemo(
    () => (colorBlue ? '#415264' : colorSpark ? '#9873AC' : '#F48580'),
    [colorBlue, colorSpark],
  );

  return (
    <>
      {checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ? 18 : 40}
          height={isMobile ? 16 : 37}
          viewBox="0 0 39.373 36.456"
        >
          <path
            id="Caminho_157"
            data-name="Caminho 157"
            d="M88.984,1082.04l11.127,10.941,19.819-27.673"
            transform="translate(-84.742 -1061.123)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="6"
          />
        </svg>
      ) : (
        <Image src={Uncheck} width={isMobile ? 31 : 59} height={3} />
      )}
    </>
  );
}

export default TableCheck;
