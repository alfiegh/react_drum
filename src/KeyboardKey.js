import React from 'react';
import './App.css';

const KeyboardKey = ({ play, sound: { keyTrigger, url, keyCode, id } }) => {
  const handleKeyDown = e => {
    if (e.keyCode === keyCode) {
      play(keyTrigger, id);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="btn-key-area">
      <button id={id} className="drum-pad" onClick={() => play(keyTrigger, id)}>
        <audio className="clip" id={keyTrigger} src={url} />
        {keyTrigger}
      </button>
    </div>
  );
};

export default KeyboardKey;
