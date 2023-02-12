import CalculatorComponent from '@/components/calculator.component';
import React from 'react';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CalculatorComponent />
    </div>
  );
}
