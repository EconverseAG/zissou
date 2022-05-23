import {useCallback, useEffect} from 'react';

function useOutsideClick(ref, callback) {
  const handleClick = useCallback(
    (e) => {
      if (ref?.current.contains(e.target)) return;

      callback(e);
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });
}

export default useOutsideClick;
