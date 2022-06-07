import useZissouProduct from '../../hooks/useZissouProduct';

import Coral from './Coral.client';
import Blue from './Blue.client';
import Spark from './Spark.client';

export default function Colchao() {
  const {isCoral, isSpark} = useZissouProduct();

  return isSpark ? <Spark /> : isCoral ? <Coral /> : <Blue />;
}
