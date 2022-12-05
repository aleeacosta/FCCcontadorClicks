import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import { useState } from 'react';

function App() {

  const [numClick, setnumClick] = useState(0)

  const addClick = () => {
    setnumClick (numClick + 1)
  }

  const resetCounter = () => {
    setnumClick (0)
  }

  return (
    <div className='app'>      
      <div className='contenedor-contador'>
        <h1>FreeCodeCamp (🔥)</h1>
        <Counter numClicks={numClick} />
        <Button
          text='Click'
          isButtonClick={true}
          functionClick={addClick} />
        <Button
          text='Reiniciar'
          isButtonClick={false}
          functionClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
