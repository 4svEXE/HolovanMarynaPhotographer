import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './button.css';

const ControllButton = ({ onClick, percentage, children }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const value = (percentage / 100) * 132;
    if (progressRef.current) {
      progressRef.current.style.strokeDasharray = `${value}, 251.2`;
    }
  }, [percentage]);

  return (
    <div className="controll-button" onClick={onClick}>
      <svg id="animated" width="44" height="44">
        <circle
          ref={progressRef}
          id="progress"
          cx="22"
          cy="22"
          r="21"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <div className="control">
        {children}
      </div>
    </div>
  );
};

ControllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  percentage: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default ControllButton;
