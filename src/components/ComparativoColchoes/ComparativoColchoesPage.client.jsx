import {LoadingProvider} from '../../hooks/useLoading';
import BenefitsTable from './BenefitsTable';
import CozinessTable from './CozinessTable';
import SecurityTable from './SecurityTable';
import SensationTable from './SensationTable';
import SupportSystemTable from './SupportSystemTable';

function ComparativoColchoesPage() {
  return (
    <LoadingProvider>
      <SensationTable />
      <CozinessTable />
      <SupportSystemTable />
      <SecurityTable />
      <BenefitsTable />
    </LoadingProvider>
  );
}

export default ComparativoColchoesPage;
