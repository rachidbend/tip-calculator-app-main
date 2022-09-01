import React from 'react';
import { Results } from '../components/Results';

export const ResultsContainer = props => {
  const handleClick = () => {
    props.onClick(true);
  };

  return <Results tip={props.tip} total={props.total} onClick={handleClick} />;
};
