import React, { useState, useEffect } from 'react';
import './BillCalculatorContainer.css';
import { InputData } from '../components/InputData';
import { Results } from '../components/Results';

export const BillCalculatorContainer = props => {
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
      tipPerPerson = 0;
    }
    if (isNaN(totalPerPerson) || !isFinite(totalPerPerson)) {
      totalPerPerson = 0;
    }
    setTip(tipPerPerson);
    setTotal(totalPerPerson);
    // console.log(`tip amount: ${tipAmount}`);
    // console.log(`tip amount per person: ${tipPerPerson}`);
    // console.log(`total amount: ${totalAmount}`);
    // console.log(`total amount per person: ${totalPerPerson}`);
    // console.log('-----------------------------');
  };

  const handleBill = value => {
    setBill(+value);
  };

  const handleCheckBox = ({ target }) => {
    if (target.checked) {
      setTipPercentage(+target.value);
      // console.log(target, `is checked`, target.value);
    }
    if (!target.checked) {
      // console.log(target, `is not checked`, target.value);
      return;
    }
  };

  const handleCustomTip = ({ target }) => {
    setTipPercentage(+target.value);
  };

  const handleReset = resetIsClicked => {
    if (resetIsClicked) {
      setBill(0);
      setTipPercentage(0);
      setNumberOfPeople(0);
      setTip(0);
      setTotal(0);
      setShouldReset(true);
    } else return;
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
      <InputData
        bill={bill}
        handleCheckBox={handleCheckBox}
        onChange={calcTipAndTotal}
        handleBill={handleBill}
        shouldReset={shouldReset}
        handleNumOfPeople={handleNumOfPeople}
        numberOfPeople={numberOfPeople}
        handleCustomTip={handleCustomTip}
      />
      <Results onClick={handleReset} tip={tip} total={total} />
    </div>
  );
};

// Results, contains tip amount and total, and a reset button
// calc, contains inputs to get the data
