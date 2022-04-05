import KlabinMobile from './KlabinMobile.client';
import KlabinDesktop from './KlabinDesktop.client';

import useMobile from '../../hooks/useMobile';

export default function Klabin() {
  const {isMobile} = useMobile();
  return isMobile ? <KlabinMobile /> : <KlabinDesktop />;
}
