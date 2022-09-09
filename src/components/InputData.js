import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const InputData = props => {
  // all values and handlers from props
  let bill = props.bill;
  const handleBill = props.handleBill;
  const handleCheckBox = props.handleCheckBox;
  const handleCustomTip = props.handleCustomTip;
  let numberOfPeople = props.numberOfPeople;
  const handleNumOfPeople = props.handleNumOfPeople;

  useEffect(() => {
    if (numberOfPeople === 0) {
      document
        .querySelector('.input-data__section--people')
        .classList.add('input-data__section--people--empty');
    } else {
      document
        .querySelector('.input-data__section--people')
        .classList.remove('input-data__section--people--empty');
    }
    console.log(bill, numberOfPeople);
  });

  // what this component should render
  return (
    <div className="input-data">
      <div className="input-data__section">
        <h3 className="heading--bill">Bill</h3>
        <input
          type="number"
          name="bill"
          id="bill"
          value={bill}
          onChange={handleBill}
          placeholder={'0'}
        />
      </div>
      <div className="input-data__section">
        <h3 className="heading--tip">Select Tip %</h3>
        <form className="tip-form">
          <div>
            <label htmlFor="tip5">5%</label>
            <input
              className="tip-input"
              type="checkbox"
              name="tip5"
              id="tip5"
              onChange={handleCheckBox}
              value={5}
            />
            <span className="checkmark"></span>
          </div>
          <div>
            <label htmlFor="tip10">10%</label>
            <input
              className="tip-input"
              type="checkbox"
              name="tip10"
              id="tip10"
              onChange={handleCheckBox}
              value={10}
            />
            <span className="checkmark"></span>
          </div>
          <div>
            <label htmlFor="tip15">15%</label>
            <input
              className="tip-input"
              type="checkbox"
              name="tip15"
              id="tip15"
              onChange={handleCheckBox}
              value={15}
            />
            <span className="checkmark"></span>
          </div>
          <div>
            <label htmlFor="tip25">25%</label>
            <input
              className="tip-input"
              type="checkbox"
              name="tip25"
              id="tip25"
              onChange={handleCheckBox}
              value={25}
            />
            <span className="checkmark"></span>
          </div>
          <div>
            <label htmlFor="tip50">50%</label>
            <input
              className="tip-input"
              type="checkbox"
              name="tip50"
              id="tip50"
              onChange={handleCheckBox}
              value={50}
            />
            <span className="checkmark"></span>
          </div>

          <input
            type="number"
            name="tipCustom"
            id="custom-tip"
            placeholder="Custom"
            onChange={handleCustomTip}
          />
        </form>
      </div>
      <div className="input-data__section input-data__section--people input-data__section--people--empty  ">
        <div className="people--container">
          <h3 className="heading--people">Number of People</h3>
          <p className="zero-warning">Can't be zero</p>
        </div>
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
