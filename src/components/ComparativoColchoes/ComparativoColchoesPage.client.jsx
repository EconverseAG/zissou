import {LoadingProvider} from '../../hooks/useLoading';
import useMobile from '../../hooks/useMobile';
import {TableGroupProvider} from '../../hooks/useTableGroup';
import BenefitsTable from './BenefitsTable';
import ComfortLayerTable from './ComfortLayerTable';
import CozinessTable from './CozinessTable';
import ProductTable from './ProductTable';
import SecurityTable from './SecurityTable';
import SensationTable from './SensationTable';
import StillHaveDoubts from './StillHaveDoubts/StillHaveDoubts.client';
import SupportSystemTable from './SupportSystemTable';
import TableFixedHeader from './TableFixedHeader';

function ComparativoColchoesPage({coral, coralHybrid, blue}) {
  const {isMobile} = useMobile();

  return (
    <LoadingProvider>
      <TableGroupProvider>
        <TableFixedHeader />
        <ProductTable
          marginTop={121}
          coral={coral}
          coralHybrid={coralHybrid}
          blue={blue}
        />
        <SensationTable marginTop={isMobile ? 53 : 79} />
        <ComfortLayerTable marginTop={isMobile ? 23 : 30} />
        <CozinessTable marginTop={isMobile ? 47 : 50} />
        <SupportSystemTable marginTop={isMobile ? 45 : 149} />
        <SecurityTable marginTop={isMobile ? 56 : 103} />
        <BenefitsTable marginTop={isMobile ? 43 : 116} />
      </TableGroupProvider>
      <StillHaveDoubts />
    </LoadingProvider>
  );
}

export default ComparativoColchoesPage;
