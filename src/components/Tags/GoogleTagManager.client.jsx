import {useEffect} from 'react';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PMCBH38',
  dataLayerName: 'dataLayer',
};

export default function GoogleTagManager() {
  useEffect(() => {
    if (!window.startGTM) {
      TagManager.initialize(tagManagerArgs);
    }
    window.startGTM = true;
  }, []);

  return null;
}
