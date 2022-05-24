import CombosBanner from '../components/CombosBanner/CombosBanner.client';
import CoralOrBlue from '../components/CoralOrBlue/CoralOrBlue.client';
import DoubtsProductPage from '../components/ProductPage/DoubtsProductPage/DoubtsProductPage.client';
import ShelfCoral from '../components/ShelfCoral/ShelfCoral.client';
import ShelfBlue from '../components/ShelfBlue/ShelfBlue.client';

import {LoadingProvider} from '../hooks/useLoading';

export default function Combos({coral, blue}) {
  return (
    <LoadingProvider>
      <CombosBanner />
      <ShelfCoral content={coral.data.product} />
      <ShelfBlue content={blue.data.product} />
      <DoubtsProductPage />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
