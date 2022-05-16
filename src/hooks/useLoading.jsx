import {createContext, useContext, useEffect, useState} from 'react';

import ZissouLoading from '../components/ZissouLoading';

const LoadingContext = createContext();
const useLoading = () => useContext(LoadingContext);

function LoadingProvider({children}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={''}>
      {isLoading && <ZissouLoading />}
      {children}
    </LoadingContext.Provider>
  );
}

export {LoadingProvider};
export default useLoading;
