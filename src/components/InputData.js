import React from 'react';

export const InputData = props => {
  const handleBill = ({ target }) => {
    const value = target.value;
    props.handleBill(value);
  };

  return (
    <div className="input-data">
      <div>
        <h3>Bill</h3>
        <input
          type="number"
          name="bill"
          id="bill"
          value={props.bill}
          onChange={handleBill}
        />
      </div>
      <div>
        <h3>tip percentage</h3>
        <form>
          <label htmlFor="tip5">5%</label>
          <input
            type="checkbox"
            name="tip5"
            id="tip5"
            onChange={props.onChange}
            value={5}
          />
          <label htmlFor="tip10">10%</label>
          <input
            type="checkbox"
            name="tip10"
            id="tip10"
            onChange={props.onChange}
            value={10}
          />
          <label htmlFor="tip15">15%</label>
          <input
            type="checkbox"
            name="tip15"
            id="tip15"
            onChange={props.onChange}
            value={15}
          />
          <label htmlFor="tip25">25%</label>
          <input
            type="checkbox"
            name="tip25"
            id="tip25"
            onChange={props.onChange}
            value={25}
          />
          <label htmlFor="tip50">50%</label>
          <input
            type="checkbox"
            name="tip50"
            id="tip50"
            onChange={props.onChange}
            value={50}
          />
          <input
            type="number"
            name="tipCustom"
            id="custom-tip"
            placeholder="Custom"
          />
        </form>
      </div>
      <div>
        <h3>number of people</h3>
        <input type="number" name="numberOfPeople" id="people" />
      </div>
    </div>
  );
};
