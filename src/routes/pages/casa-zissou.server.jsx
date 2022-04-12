import {Suspense} from 'react';
import Banners from '../../components/CasaZissou/Banners/Banners.client';
import ExperienciaZissou from '../../components/CasaZissou/ExperienciaZissou/ExperienciaZissou.client';
import Layout from '../../components/Layout.server';

export default function ComparativoColchoes() {
  return (
    <Layout>
      <Suspense fallback={<BoxFallback />}>
        <Banners />
        <ExperienciaZissou />
      </Suspense>
    </Layout>
  );
}

function BoxFallback() {
  return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
}
