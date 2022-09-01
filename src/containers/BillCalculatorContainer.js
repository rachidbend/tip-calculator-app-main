import React, { useState, useEffect } from 'react';
import './BillCalculatorContainer.css';
import { InputDataContainer } from './InputDataContainer';
import { ResultsContainer } from './ResultsContainer';

export const BillCalculatorContainer = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);

  const calcTipAndTotal = () => {
    let tipAmount = (bill / 100) * tipPercentage;
    let totalAmount = bill + tipAmount;
    let tipPerPerson = (tipAmount / numberOfPeople).toFixed(2);
    let totalPerPerson = (totalAmount / numberOfPeople).toFixed(2);

    if (isNaN(tipPerPerson) || !isFinite(tipPerPerson)) {
      tipPerPerson = (0).toFixed(2);
    }
    if (isNaN(totalPerPerson) || !isFinite(totalPerPerson)) {
      totalPerPerson = (0).toFixed(2);
    }
    setTip(tipPerPerson);
    setTotal(totalPerPerson);
  };

  const handleBill = value => {
    setBill(+value);
  };

  const handleCheckBox = ({ target }) => {
    // if the box is checked the set the tip percentage as that value
    if (target.checked) setTipPercentage(+target.value);
  };

  const handleCustomTip = ({ target }) => {
    setTipPercentage(+target.value);
  };

  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(0);
    setTip(0);
    setTotal(0);
    setShouldReset(true);
  };

  const handleNumOfPeople = ({ target }) => {
    const value = +target.value;
    setNumberOfPeople(value);
  };

  useEffect(() => {
    // this is to make sure that when any one of the inputs value changes we calculate the tip and total to keep them updated
    calcTipAndTotal();
  }, [bill, tipPercentage, numberOfPeople]);

  useEffect(() => {
    // we set the shouldReset to false again to allow components to be dynamic
    // it's only triggered after shouldReset state is chenged to true so we change it back to false
    setShouldReset(false);
  }, [shouldReset]);

  return (
    <div className="bill-calculator">
      <InputDataContainer
        bill={bill}
        handleCheckBox={handleCheckBox}
        handleBill={handleBill}
        shouldReset={shouldReset}
        handleNumOfPeople={handleNumOfPeople}
        numberOfPeople={numberOfPeople}
        handleCustomTip={handleCustomTip}
      />
      <ResultsContainer onClick={handleReset} tip={tip} total={total} />
    </div>
  );
};

// Results, contains tip amount and total, and a reset button
// calc, contains inputs to get the data
