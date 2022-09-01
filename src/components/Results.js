import React from 'react';

export const Results = props => {
  return (
    <div className="results">
      <div>tip amount: {props.tip} </div>
      <div>total: {props.total} </div>
      <button onClick={props.onClick}>reset</button>
    </div>
  );
};
