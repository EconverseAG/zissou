import {LoadingProvider} from '../../hooks/useLoading';
import SensationTable from './SensationTable';
import SupportSystemTable from './SupportSystemTable';

function ComparativoColchoesPage() {
  return (
    <LoadingProvider>
      <SensationTable />
      <SupportSystemTable />
    </LoadingProvider>
  );
}

export default ComparativoColchoesPage;
