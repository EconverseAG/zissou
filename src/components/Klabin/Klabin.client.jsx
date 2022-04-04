import KlabinMobile from '../KlabinMobile/KlabinMobile.client';
import KlabinDesktop from '../KlabinDesktop/KlabinDesktop.client';

import useMobile from '../../hooks/useMobile';

export default function Klabin() {
  const {isMobile} = useMobile();
  return isMobile ? <KlabinMobile /> : <KlabinDesktop />;
}
