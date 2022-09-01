import React from 'react';

export const Results = props => {
  const handleClick = () => {
    props.onClick(true);
  };

  return (
    <div className="results">
      <div>tip amount: {props.tip} </div>
      <div>total: {props.total} </div>
      <button onClick={handleClick}>reset</button>
    </div>
  );
};
