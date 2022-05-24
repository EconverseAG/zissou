import Layout from '../../components/Layout.server';

import CasaZissouClient from '../../components/CasaZissou/CasaZissouClient.client';

export default function CasaZissou() {
  return (
    <Layout>
      <CasaZissouClient />
    </Layout>
  );
}
