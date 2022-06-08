import {useEffect} from 'react';
import ReactGA from 'react-ga';

export default function Tags({pathname}) {
  useEffect(() => {
    ReactGA.initialize('UA-99792740-1');
    ReactGA.pageview(pathname);
  }, [pathname]);

  return null;
}
