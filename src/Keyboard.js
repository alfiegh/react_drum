import React from 'react';
import KeyboardKey from './KeyboardKey';
import './App.css';

const Keyboard = ({ power, play, sounds }) => {
  return (
    <div className="keyboard">
      {power
        ? sounds.map(sound => <KeyboardKey play={play} sound={sound} />)
        : sounds.map(sound => (
            <KeyboardKey
              play={play}
              sound={{
                ...sound,
                url: 'http://freesoundeffect.net/sites/default/files/printerbeep-403-sound-effect-20834351.mp3',
                id: 'Power is Off',
              }}
            />
          ))}
    </div>
  );
};

export default Keyboard;

// return (
//     <button className="drum-pad" onClick={() => play(keyTrigger)}>
//       <audio className="clip" id={keyTrigger} src={url} />
//       {keyTrigger}
//     </button>
//   );
