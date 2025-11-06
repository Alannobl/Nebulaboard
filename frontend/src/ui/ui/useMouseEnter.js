import React from 'react';
import { MouseEnterContext } from './MouseEnterContext';

function useMouseEnter() {
  const context = React.useContext(MouseEnterContext);
  if (!context) {
    console.error("useMouseEnter called outside MouseEnterProvider");
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
}

export { useMouseEnter };
