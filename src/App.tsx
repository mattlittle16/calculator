import React, { useEffect, useState} from 'react';
import './App.css';
import Screen from './components/Screen';
import CalculatorButton from './components/CalculatorButton';

const App = () => {
  const [screenValue, setScreenValue] = useState(0);


    return <>
      <div className="main">
        <Screen screenValue={0} />
        <CalculatorButton />
      </div>
    </>;
};

export default App;
