import {Suspense} from 'react';
import Layout from '../../components/Layout.server';

import Banners from '../../components/CasaZissou/Banners/Banners.client';
import ExperienciaZissou from '../../components/CasaZissou/ExperienciaZissou/ExperienciaZissou.client';
import GostinhoZissou from '../../components/CasaZissou/GostinhoZissou/GostinhoZissou.client';
import HorarioFuncionamento from '../../components/CasaZissou/HorarioFuncionamento/HorarioFuncionamento.client';
import WhatsApp from '../../components/CasaZissou/WhatsAppZissou/WhatsApp.client';
import CoralOrBlue from '../../components/CoralOrBlue/CoralOrBlue.client';

export default function ComparativoColchoes() {
  return (
    <Layout>
      <Suspense fallback={<BoxFallback />}>
        <Banners />
        <ExperienciaZissou />
        <HorarioFuncionamento />
        <GostinhoZissou />
        <WhatsApp />
        <CoralOrBlue />
      </Suspense>
    </Layout>
  );
}

function BoxFallback() {
  return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
}
