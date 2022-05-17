import {LoadingProvider} from '../../hooks/useLoading';
import BenefitsTable from './BenefitsTable';
import ComfortLayerTable from './ComfortLayerTable';
import CozinessTable from './CozinessTable';
import ProductTable from './ProductTable';
import SecurityTable from './SecurityTable';
import SensationTable from './SensationTable';
import StillHaveDoubts from './StillHaveDoubts/StillHaveDoubts.client';
import SupportSystemTable from './SupportSystemTable';

function ComparativoColchoesPage() {
  return (
    <LoadingProvider>
      <ProductTable marginTop={121} />
      <SensationTable marginTop={79} />
      <ComfortLayerTable marginTop={30} />
      <CozinessTable marginTop={50} />
      <SupportSystemTable marginTop={149} />
      <SecurityTable marginTop={103} />
      <BenefitsTable marginTop={116} />
      <StillHaveDoubts />
    </LoadingProvider>
  );
}

export default ComparativoColchoesPage;
