import React from 'react';
import PropTypes from 'prop-types';

export const InputData = props => {
  // all values and handlers from props
  const bill = props.bill;
  const handleBill = props.handleBill;
  const handleCheckBox = props.handleCheckBox;
  const handleCustomTip = props.handleCustomTip;
  const numberOfPeople = props.numberOfPeople;
  const handleNumOfPeople = props.handleNumOfPeople;

  // what this component should render
  return (
    <div className="input-data">
      <div>
        <h3>Bill</h3>
        <input
          type="number"
          name="bill"
          id="bill"
          value={bill}
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
          onChange={handleNumOfPeople}
          value={numberOfPeople}
          placeholder={'0'}
        />
      </div>
    </div>
  );
};

InputData.prototypes = {
  bill: PropTypes.number.isRequired,
  handleBill: PropTypes.func.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleCustomTip: PropTypes.func.isRequired,
  numberOfPeople: PropTypes.number.isRequired,
  handleNumOfPeople: PropTypes.func.isRequired,
};
