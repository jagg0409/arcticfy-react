// LoadingBar.js
import React from 'react';
import PropTypes from 'prop-types';
import './loadbar.css'; // Add styling for your loading bar

const LoadingBar = ({ progress }) => {
  return (
    <div className="loading-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

LoadingBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default LoadingBar;
