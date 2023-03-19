import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [x1Value, setX1Value] = useState(0);
  const [x2Value, setX2Value] = useState(0);
  const [xOpValue, setXOpValue] = useState("+");
  const [result, setResult] = useState("");
  
  const options = [
    {label: '+', value: '+'},
    {label: '-', value: '-'},
    {label: '*', value: '*'},
    {label: '/', value: '/'},
    {label: '^', value: '^'}
  ];
  
  const handleX1Change = (event) => {
    setX1Value(event.target.value);
  };

  const handleX2Change = (event) => {
    setX2Value(event.target.value);
  };

  const handleXOpChange = (event) => {
    setXOpValue(event.target.value);
  };

  const Calc = () => {
    let num1 = parseFloat(x1Value);
    let num2 = parseFloat(x2Value);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Ans");
      return;
    }

    switch (xOpValue) {
      case "+":
        var add = num1 + num2;
        if(add.toString().length > 8){
          setResult("LimitHit");
         }else{
          setResult(num1 + num2);
         }
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        var multi = num1 * num2;
       if(multi.toString().length > 8){
        setResult("LimitHit");
       }else{
        setResult(num1 * num2);
       }
        break;
      case "/":
        if(num2 === 0){
          setResult("Inf");
        }else{
          setResult(num1 / num2);
        }
        break;
      case "^":
        var power = num1 ** num2;
        if(power.toString().length > 8){
          setResult("LimitHit");
        }else{
          setResult(num1 ** num2);
        }
        break;
      default:
        setResult("Invalid operator");
        break;
    }
  };

  useEffect(() => {
    Calc();
  }, [x1Value, x2Value, xOpValue]);

  return (
    <div className="App">
      <header className="App-header">
          <a className='App-title'>
            Calculadora Cleber
          </a>
      </header>
      <div>
        <input onChange={handleX1Change} type='text' className='App-rect App-rect1' placeholder='Num 1' maxLength="6"></input>

        <select value={xOpValue} onChange={handleXOpChange} className='App-square' size='1'>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>

        <input onChange={handleX2Change} type='text' className='App-rect App-rect2' placeholder='Num 2' maxLength="6"></input>
        <a className='App-equal'>=</a>
        <output className='App-output'>{result.toString().slice(0,8)}</output>

        <div className='App-rect-line App-rect1'></div>
        <div className='App-square-line'></div>
        <div className='App-rect-line App-rect2'></div>
        <div className='App-rect-line App-rect3'></div>
      </div>
    </div>
  );
}

export default App;