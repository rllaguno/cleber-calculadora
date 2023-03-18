import * as React from 'react';
import './App.css';

function App() {
  const options = [
    {label: '+', value: '+'},
    {label: '-', value: '-'},
    {label: '*', value: '*'},
    {label: '/', value: '/'},
  ]
  
  const [value, setValue] = React.useState('+');

  const handleChange = (event) => {
 
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a className='App-title'>
          Calculadora Cleber
        </a>
        
      </header>
      <input type='text' className='App-rect App-rect1' placeholder='Num 1'></input>

       <select value={value} onChange={handleChange} className='App-square ' >
         {options.map((option) => (
           <option value={option.value}>{option.label}</option>
         ))}
       </select>

       <input type='text' className='App-rect App-rect2' placeholder='Num 2'></input>
       <a className='App-equal'>=</a>
       <output  className='App-output' ></output>

       <div className='App-rect-line App-rect1'></div>
       <div className='App-square-line'></div>
       <div className='App-rect-line App-rect2'></div>
       <div className='App-rect-line App-rect3'></div>
     
    


    </div>
      );
}

export default App;
