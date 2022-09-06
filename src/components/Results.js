import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// this is a controlled component that only displays some results and tells if the reset button is clicked
export const Results = props => {
  useEffect(() => {
    const resetBtn = document.querySelector('.btn--reset');
    const tip = +props.tip;
    if (tip === 0 || tip === '') {
      resetBtn.classList.remove('btn--reset--active');
      // console.log('tip is 0');
    } else {
      resetBtn.classList.add('btn--reset--active');
      // console.log('tip is NOT 0');
    }
    // console.log(+props.tip);
  }, [props.tip]);

  return (
    <div className="results">
      <div>
        <div className="results__section ">
          <div>
            <h3 className="results__title">Tip Amount</h3>
            <p className="results__per-person">/ person</p>
          </div>
          <div>
            <p className="results__number">${props.tip}</p>
          </div>
        </div>
        <div className="results__section">
          <div>
            <h3 className="results__title">Total</h3>
            <p className="results__per-person">/ person</p>
          </div>
          <div>
            <p className="results__number">${props.total}</p>
          </div>
        </div>
      </div>
      <button className="btn btn--reset" onClick={props.onClick}>
        reset
      </button>
    </div>
  );
};

Results.prototypes = {
  tips: PropTypes.number,
  total: PropTypes.number,
  onClick: PropTypes.func,
};
