import GoogleAnalytics from './GoogleAnalytics.client';
import GoogleTagManager from './GoogleTagManager.client';
import Huggy from './Huggy.client';

export default function Tags({pathname}) {
  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics pathname={pathname} />
      <Huggy />
    </>
  );
}
