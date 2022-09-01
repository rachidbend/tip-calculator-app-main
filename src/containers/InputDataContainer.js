import React from 'react';
import { InputData } from '../components/InputData';

export const InputDataContainer = props => {
  // Props
  const bill = props.bill === 0 ? '' : props.bill;
  const numberOfPeople = props.numberOfPeople === 0 ? '' : props.numberOfPeople;
  const handleNumOfPeople = props.handleNumOfPeople;

  // Elements
  const checkBoxes = document.querySelectorAll('.tip-input');
  const customTip = document.getElementById('custom-tip');

  // dynamicly reset inputs and checkboxes if it should based on state
  if (props.shouldReset) {
    // uncheck all checkboxes
    checkBoxes.forEach(checkBox => {
      checkBox.checked = false;
    });
    // reset custom tip's value
    customTip.value = '';
  }

  // handling when bill value is chenged
  const handleBill = ({ target }) => {
    // get the value
    const value = target.value;
    //set the bill value in state of parent
    props.handleBill(value);
  };

  // when a box is checked do this
  const handleCheckBox = event => {
    // call the parent handler to set the value of tip percentage usinf the target
    props.handleCheckBox(event);
    // reset the value of custom tip input to avoid bugs
    customTip.value = '';
    // basicly uncheck all other boxes and leave the last checked one as checked
    const target = event.target;
    checkBoxes.forEach(checkBox => {
      if (checkBox !== target) {
        checkBox.checked = false;
      }
    });
  };

  // when a custom tip is inputed
  const handleCustomTip = event => {
    // get the value entered
    const custom = event.target.value;
    // basicly if custom tip percentage is entered then uncheck all other checkboxes, to avoid bugs
    if (custom !== '') {
      checkBoxes.forEach(checkBox => {
        checkBox.checked = false;
      });
      // then give the parent handler the event to get the value from it
      props.handleCustomTip(event);
    }
  };

  return (
    <InputData
      bill={bill}
      handleBill={handleBill}
      handleCheckBox={handleCheckBox}
      handleCustomTip={handleCustomTip}
      numberOfPeople={numberOfPeople}
      handleNumOfPeople={handleNumOfPeople}
    />
  );
};
