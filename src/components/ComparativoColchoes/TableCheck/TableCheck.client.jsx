import {Image} from '@shopify/hydrogen';

import Check from '../../../assets/check-icon.png';
import CheckBlue from '../../../assets/check-blue.png';
import Uncheck from '../../../assets/uncheck.png';

function TableCheck({checked, colorBlue}) {
  return (
    <>
      {checked ? (
        colorBlue ? (
          <Image src={CheckBlue} width={40} height={37} />
        ) : (
          <Image src={Check} width={40} height={37} />
        )
      ) : (
        <Image src={Uncheck} width={59} height={3} />
      )}
    </>
  );
}

export default TableCheck;
