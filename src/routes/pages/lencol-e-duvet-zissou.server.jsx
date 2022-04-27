import LencolDuvetBanner from '../../components/LencolDuvetBanner/LencolDuvetBanner.client';

import Layout from '../../components/Layout.server';
import LencolOrDuvet from '../../components/LencolOrDuvet/LencolOrDuvet.client';
import TheSecret from '../../components/TheSecret/TheSecret.client';
import TryItFor100Days from '../../components/TryItFor100Days/TryItFor100Days.client';
import ZissouStores from '../../components/ZissouStores/ZissouStores.client';
import Partners from '../../components/Partners/Partners.client';
import TecidoBambu from '../../components/TecidoBambu/TecidoBambu.client';

export default function LencolDuvet() {
  return (
    <Layout>
      <LencolDuvetBanner />
      <LencolOrDuvet />
      <TheSecret productName={'Lençol e o Duvet'} />
      <TecidoBambu />
      <TryItFor100Days />
      <ZissouStores />
      <Partners />
    </Layout>
  );
}
