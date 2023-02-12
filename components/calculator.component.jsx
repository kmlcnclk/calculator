import React, { useState } from 'react';
import styles from 'styles/Calculator.module.css';
import ButtonsComponent from './buttons.component';

function CalculatorComponent() {
  const data = [
    {
      text: 'AC',
      colorState: '#26F0CB',
      processName: 'AC',
    },
    {
      text: '**',
      colorState: '#26F0CB',
      processName: 'process',
    },
    {
      text: '%',
      colorState: '#26F0CB',
      processName: 'process',
    },
    {
      text: '/',
      colorState: '#EA6666',
      processName: 'process',
    },
    {
      text: '7',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '8',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '9',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: 'X',
      colorState: '#EA6666',
      processName: 'process',
    },
    {
      text: '4',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '5',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '6',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '--',
      colorState: '#EA6666',
      processName: 'process',
    },
    {
      text: '1',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '2',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '3',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '+',
      colorState: '#EA6666',
      processName: 'process',
    },
    {
      text: 'R',
      colorState: '#EDEEEE',
      processName: 'reset',
    },
    {
      text: '0',
      colorState: '#EDEEEE',
      processName: 'number',
    },
    {
      text: '.',
      colorState: '#EDEEEE',
      processName: 'point',
    },
    {
      text: '=',
      colorState: '#EA6666',
      processName: 'equality',
    },
  ];

  const [process, setProcess] = useState('');
  const [res, setRes] = useState(0);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  return (
    <div className={styles.calculatorMainDiv}>
      <div className={styles.calculatorFirstDiv}>
        <p>{first && first != '' ? first : res}</p>
      </div>

      <div className={styles.calculatorSecondDiv}>
        <div className={styles.calculatorSecondDivs}>
          {data.map((d, i) => (
            <ButtonsComponent
              {...d}
              key={i}
              setRes={setRes}
              setProcess={setProcess}
              process={process}
              first={first}
              setFirst={setFirst}
              second={second}
              setSecond={setSecond}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalculatorComponent;
