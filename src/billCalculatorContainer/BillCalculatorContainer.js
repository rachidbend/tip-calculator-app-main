import React, { useState } from 'react';
import './BillCalculatorContainer.css';
import { InputData } from '../components/InputData';
import { Results } from '../components/Results';

export const BillCalculatorContainer = props => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tip, setStip] = useState(0);
  const [total, setTotal] = useState(0);

  const boxChecked = ({ target }) => {
    if (!target.checked) console.log(target, `is not checked`, target.value);
    if (target.checked) {
      console.log(target, `is checked`, target.value);
      setTipPercentage(+target.value);
      console.log(tipPercentage);
    }
  };

  const handleBill = value => {
    // console.log(+value);
    setBill(+value);
  };

  return (
    <div className="bill-calculator">
      <InputData bill={bill} onChange={boxChecked} handleBill={handleBill} />
      <Results />
    </div>
  );
};

// Results, contains tip amount and total, and a reset button
// calc, contains inputs to get the data
