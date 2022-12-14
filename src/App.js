import React from 'react';
import './App.css';
import { Title } from './Title';
import { BillCalculatorContainer } from './containers/BillCalculatorContainer';

function App() {
  return (
    <div className="container">
      <Title />
      <BillCalculatorContainer />
    </div>
  );
}

export default App;
