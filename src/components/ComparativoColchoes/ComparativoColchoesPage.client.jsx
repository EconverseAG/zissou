import {LoadingProvider} from '../../hooks/useLoading';
import SecurityTable from './SecurityTable';
import SensationTable from './SensationTable';
import SupportSystemTable from './SupportSystemTable';

function ComparativoColchoesPage() {
  return (
    <LoadingProvider>
      <SensationTable />
      <SupportSystemTable />
      <SecurityTable />
    </LoadingProvider>
  );
}

export default ComparativoColchoesPage;
