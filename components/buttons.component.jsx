import React from 'react';
import styles from 'styles/Calculator.module.css';

function ButtonsComponent({
  text,
  colorState,
  processName,
  setRes,
  setProcess,
  process,
  first,
  setFirst,
  second,
  setSecond,
}) {
  const calculate = () => {
    if (process == '**') {
      setRes(Number(second) ** Number(first));
    } else if (process == '%') {
      setRes(Number(second) % Number(first));
    } else if (process == '/') {
      setRes(Number(second) / Number(first));
    } else if (process == 'X') {
      setRes(Number(second) * Number(first));
    } else if (process == '+') {
      setRes(Number(second) + Number(first));
    } else if (process == '--') {
      setRes(Number(second) - Number(first));
    }
    setFirst('');
    setSecond('');
  };

  const clickFunction = async () => {
    if (processName == 'number') {
      setFirst((prev) => prev + text);
    } else if (processName == 'AC') {
      setProcess('');
      setFirst('');
      setSecond('');
      setRes(0);
    } else if (processName == 'process') {
      setSecond(first);
      setFirst('');
      setProcess(text);
    } else if (processName == 'point') {
      setFirst((prev) => prev + '.');
    } else if (processName == 'equality') {
      calculate();
    } else if (processName == 'reset') {
      setProcess('');
      setFirst('');
      setSecond('');
      setRes(0);
    }
  };

  return (
    <div className={styles.calculatorThirdDiv}>
      <div className={styles.calculatorThirdDivs} onClick={clickFunction}>
        <p
          style={{
            color: colorState,
            fontWeight: 'bold',
            fontSize: 'larger',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default ButtonsComponent;
