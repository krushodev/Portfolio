import { useEffect, useState } from 'react';

export function useWindow() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({ width: undefined, height: undefined });

  const handleResize = () => {
    setWindowSize({
      width: innerWidth,
      height: innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
