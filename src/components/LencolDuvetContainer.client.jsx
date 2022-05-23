import {LoadingProvider} from '../hooks/useLoading';
import LencolDuvetBanner from './LencolDuvetBanner/LencolDuvetBanner.client';
import LencolOrDuvet from './LencolOrDuvet/LencolOrDuvet.client';
import Partners from './Partners/Partners.client';
import TecidoBambu from './TecidoBambu/TecidoBambu.client';
import TheSecret from './TheSecret/TheSecret.client';
import TryItFor100Days from './TryItFor100Days/TryItFor100Days.client';
import ZissouStores from './ZissouStores/ZissouStores.client';

export default function LencolDuvetContainer() {
  return (
    <LoadingProvider>
      <LencolDuvetBanner />
      <LencolOrDuvet />
      <TheSecret productName={'Lençol e o Duvet'} open />
      <TecidoBambu />
      <TryItFor100Days />
      <ZissouStores />
      <Partners />
    </LoadingProvider>
  );
}
