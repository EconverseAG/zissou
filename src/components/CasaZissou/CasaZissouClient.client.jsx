import {useRef} from 'react';
import {LoadingProvider} from '../../hooks/useLoading';

import Banners from './Banners/Banners.client';
import ExperienciaZissou from '../../components/CasaZissou/ExperienciaZissou/ExperienciaZissou.client';
import GostinhoZissou from '../../components/CasaZissou/GostinhoZissou/GostinhoZissou.client';
import HorarioFuncionamento from '../../components/CasaZissou/HorarioFuncionamento/HorarioFuncionamento.client';
import WhatsApp from '../../components/CasaZissou/WhatsAppZissou/WhatsApp.client';
import Hospitalidade from '../../components/CasaZissou/Hospitalidade/Hospitalidade.client';
import CoralOrBlue from '../../components/CoralOrBlue/CoralOrBlue.client';
import SelectLojas from '../../components/CasaZissou/SelectLojas/SelectLojas.client';

export default function CasaZissouClient() {
  const refScroll = useRef(null);

  return (
    <LoadingProvider>
      <Banners refScroll={refScroll} />
      <ExperienciaZissou refScroll={refScroll} />
      <HorarioFuncionamento />
      <SelectLojas />
      <GostinhoZissou />
      <WhatsApp />
      <Hospitalidade />
      <CoralOrBlue />
    </LoadingProvider>
  );
}
