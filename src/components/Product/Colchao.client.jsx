import useZissouProduct from '../../hooks/useZissouProduct';

import Coral from './Coral.client';
import Blue from './Blue.client';

export default function Colchao() {
  const {isCoral} = useZissouProduct();

  return isCoral ? <Coral /> : <Blue />;
}
