import Layout from '../../components/Layout.server';

// import LencolDuvetBanner from '../../components/LencolDuvetBanner/LencolDuvetBanner.client';
// import LencolOrDuvet from '../../components/LencolOrDuvet/LencolOrDuvet.client';
// import TheSecret from '../../components/TheSecret/TheSecret.client';
// import TryItFor100Days from '../../components/TryItFor100Days/TryItFor100Days.client';
// import ZissouStores from '../../components/ZissouStores/ZissouStores.client';
// import Partners from '../../components/Partners/Partners.client';
// import TecidoBambu from '../../components/TecidoBambu/TecidoBambu.client';
import LencolDuvetContainer from '../../components/LencolDuvetContainer.client';

export default function LencolDuvet() {
  return (
    <Layout>
      <LencolDuvetContainer />
    </Layout>
  );
}
