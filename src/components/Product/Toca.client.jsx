import {LoadingProvider} from '../../hooks/useLoading';
import Partners from '../Partners/Partners.client';
import TocaBanner from '../TocaBanner/TocaBanner.client';
import TocaHowToDescribe from '../TocaHowToDescribe/TocaHowToDescribe.client';
import TocaNossosEspecialistas from '../TocaNossosEspecialistas/TocaNossosEspecialistas.client';
import TocaTechnical from '../TocaTechnical/TocaTechnical.client';
import TocaXRay from '../TocaXRay/TocaXRay.client';
import ZissouStores from '../ZissouStores/ZissouStores.client';

export default function Toca() {
  return (
    <LoadingProvider>
      <div className="flex flex-col">
        <TocaBanner />
        <TocaHowToDescribe />
        <TocaXRay />
        <TocaTechnical />
        <TocaNossosEspecialistas />
        <ZissouStores />
        <Partners />
      </div>
    </LoadingProvider>
  );
}
