import {LoadingProvider} from '../../hooks/useLoading';
import SensationTable from './SensationTable';

function ComparativoColchoesPage() {
  return (
    <LoadingProvider>
      <SensationTable />
    </LoadingProvider>
  );
}

export default ComparativoColchoesPage;
