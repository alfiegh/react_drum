import React from 'react';
import './App.css';

const Controller = ({
  name,
  changeSounds,
  volume,
  handleVolume,
  power,
  offOn,
}) => {
  return (
    <div className="controller">
      <button className="onOff" onClick={offOn}>
        {power ? 'Power ON' : 'Power OFF'}
      </button>
      <h3 className="volume">Volume: {Math.round(volume * 100)}</h3>
      <input
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolume}
        className="volume-bar"
      />
      <h2 className="kit-type" id="display">
        {name}
      </h2>
      <button className="change-sound" onClick={changeSounds}>
        Change Sounds
      </button>
    </div>
  );
};

export default Controller;
