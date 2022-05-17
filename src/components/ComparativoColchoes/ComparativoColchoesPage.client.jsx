import {LoadingProvider} from '../../hooks/useLoading';
import BenefitsTable from './BenefitsTable';
import ComfortLayerTable from './ComfortLayerTable';
import CozinessTable from './CozinessTable';
import SecurityTable from './SecurityTable';
import SensationTable from './SensationTable';
import SupportSystemTable from './SupportSystemTable';

function ComparativoColchoesPage() {
  return (
    <LoadingProvider>
      <SensationTable />
      <ComfortLayerTable />
      <CozinessTable />
      <SupportSystemTable />
      <SecurityTable />
      <BenefitsTable />
    </LoadingProvider>
  );
}

export default ComparativoColchoesPage;
