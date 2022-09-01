import React, { useState, useEffect } from 'react';
import './BillCalculatorContainer.css';
import { InputData } from '../components/InputData';
import { Results } from '../components/Results';

export const BillCalculatorContainer = props => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);

  const calcTipAndTotal = () => {
    const tipAmount = (bill / 100) * tipPercentage;
    // console.log(`tip amount ${tipAmount}`);
    const totalAmount = bill + tipAmount;
    // console.log(`total amount ${totalAmount}`);
    const tipPerPerson = tipAmount / numberOfPeople;
    const totalPerPerson = totalAmount / numberOfPeople;
    setTip(tipPerPerson);
    setTotal(totalPerPerson);
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
