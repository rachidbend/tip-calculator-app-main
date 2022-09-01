import React from 'react';
import { Results } from '../components/Results';
import PropTypes from 'prop-types';

export const ResultsContainer = props => {
  // if the reset button is clicked then tell the parent element to reset everything
  const handleClick = () => {
    // Get parent to reset everything

    props.onClick();
  };

  return <Results tip={props.tip} total={props.total} onClick={handleClick} />;
};

Results.prototypes = {
  tips: PropTypes.number,
  total: PropTypes.number,
  onClick: PropTypes.func,
};
