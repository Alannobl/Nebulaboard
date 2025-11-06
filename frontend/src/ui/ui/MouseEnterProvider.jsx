import React, { useMemo, useState } from 'react';
import { MouseEnterContext } from './MouseEnterContext';

export function MouseEnterProvider({ children }) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const value = useMemo(
    () => ({ isMouseEntered, setIsMouseEntered }),
    [isMouseEntered]
  );

  return (
    <MouseEnterContext.Provider value={value}>
      {children}
    </MouseEnterContext.Provider>
  );
}
