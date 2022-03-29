/* eslint-disable */

import {useState, useEffect} from 'react';

export default function useMobile() {
  const isWindowDefined = typeof window !== 'undefined';
  const [width, setWidth] = useState(isWindowDefined ? window.innerWidth : 0);

  function handleWindowSizeChange() {
    setWidth(window?.innerWidth);
  }

  useEffect(() => {
    if(!isWindowDefined) return;

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return {isMobile, width};
}