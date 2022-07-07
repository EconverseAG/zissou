import GoogleAnalytics from './GoogleAnalytics.client';
import GoogleTagManager from './GoogleTagManager.client';

export default function Tags({pathname}) {
  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics pathname={pathname} />
    </>
  );
}
