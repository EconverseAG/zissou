import {useEffect} from 'react';
import ReactGA from 'react-ga';

const usePageTracking = ({pathname}) => {
  useEffect(() => {
    ReactGA.initialize('UA-99792740-3');
    ReactGA.pageview(pathname);
  }, [pathname]);
};

export default usePageTracking;
