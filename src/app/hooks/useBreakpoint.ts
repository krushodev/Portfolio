import { useMemo } from 'react';
import { useWindow } from './useWindow';

import breakpoints from '../constants/breakpoints';

export function useBreakpoint() {
  const { width } = useWindow();

  const defaultBreakpoint = 'xxs';

  const breakpoint = useMemo(() => {
    if (!width) return defaultBreakpoint;

    const size = breakpoints.find(item => width <= item.size);

    if (!size) return defaultBreakpoint;

    return size.name === 'xxs' ? defaultBreakpoint : size.name;
  }, [width]);

  return {
    is: {
      xxs: breakpoint === 'xxs',
      xs: breakpoint === 'xs',
      s: breakpoint === 's',
      sm: breakpoint === 'sm',
      md: breakpoint === 'md',
      lg: breakpoint === 'lg',
      xl: breakpoint === 'xl',
      xxl: breakpoint === 'xxl',
      xxxl: breakpoint === 'xxxl'
    },
    breakpoint
  };
}
