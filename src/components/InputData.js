import React from 'react';

export const InputData = props => {
  const handleBill = ({ target }) => {
    const value = target.value;
    props.handleBill(value);
    props.onChange();
  };

  if (props.shouldReset) {
    const checkBoxes = document.querySelectorAll('.tip-input');
    checkBoxes.forEach(checkBox => {
      checkBox.checked = false;
    });
  }

  const handleCheckBox = event => {
    props.handleCheckBox(event);
    const checkBoxes = document.querySelectorAll('.tip-input');
    const customTip = document.getElementById('custom-tip');
    customTip.value = '';
    const target = event.target;
    checkBoxes.forEach(checkBox => {
      if (checkBox !== target) {
        checkBox.checked = false;
      }
    });
  };

  const handleCustomTip = event => {
    const custom = event.target.value;
    console.log(custom);
    if (custom !== '') {
      const checkBoxes = document.querySelectorAll('.tip-input');
      checkBoxes.forEach(checkBox => {
        checkBox.checked = false;
      });
      props.handleCustomTip(event);
    }
  };

  // if (!customInput.value) {
  //   const checkBoxes = document.querySelectorAll('.tip-input');
  //   checkBoxes.forEach(checkBox => {
  //     checkBox.checked = false;
  //   });
  // }

  return (
    <div className="input-data">
      <div>
        <h3>Bill</h3>
        <input
          type="number"
          name="bill"
          id="bill"
          value={props.bill === 0 ? '' : props.bill}
          onChange={handleBill}
          placeholder={'0'}
        />
      </div>
      <div>
        <h3>tip percentage</h3>
        <form>
          <label htmlFor="tip5">5%</label>
          <input
            className="tip-input"
            type="checkbox"
            name="tip5"
            id="tip5"
            onChange={handleCheckBox}
            value={5}
          />
          <label htmlFor="tip10">10%</label>
          <input
            className="tip-input"
            type="checkbox"
            name="tip10"
            id="tip10"
            onChange={handleCheckBox}
            value={10}
          />
          <label htmlFor="tip15">15%</label>
          <input
            className="tip-input"
            type="checkbox"
            name="tip15"
            id="tip15"
            onChange={handleCheckBox}
            value={15}
          />
          <label htmlFor="tip25">25%</label>
          <input
            className="tip-input"
            type="checkbox"
            name="tip25"
            id="tip25"
            onChange={handleCheckBox}
            value={25}
          />
          <label htmlFor="tip50">50%</label>
          <input
            className="tip-input"
            type="checkbox"
            name="tip50"
            id="tip50"
            onChange={handleCheckBox}
            value={50}
          />
          <input
            type="number"
            name="tipCustom"
            id="custom-tip"
            placeholder="Custom"
            onChange={handleCustomTip}
          />
        </form>
      </div>
      <div>
        <h3>number of people</h3>
        <input
          type="number"
          name="numberOfPeople"
          id="people"
          onChange={props.handleNumOfPeople}
          value={props.numberOfPeople === 0 ? '' : props.numberOfPeople}
          placeholder={'0'}
        />
      </div>
    </div>
  );
};
