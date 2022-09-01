import React from 'react';
import PropTypes from 'prop-types';

// this is a controlled component that only displays some results and tells if the reset button is clicked
export const Results = props => {
  return (
    <div className="results">
      <div>tip amount: {props.tip} </div>
      <div>total: {props.total} </div>
      <button onClick={props.onClick}>reset</button>
    </div>
  );
};

Results.prototypes = {
  tips: PropTypes.number,
  total: PropTypes.number,
  onClick: PropTypes.func,
};
