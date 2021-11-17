import './App.css';
import Controller from './Controller';
import Keyboard from './Keyboard';
import React, { useState } from 'react';

const soundsOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const soundsTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];

const soundsName = {
  heaterKit: 'Heater Set',
  pianoKit: 'Piano Set',
};

const soundsGroup = {
  heaterKit: soundsOne,
  pianoKit: soundsTwo,
};

function App() {
  const [soundType, setSoundType] = useState('heaterKit');
  const [sounds, setSounds] = useState(soundsGroup[soundType]);
  const [soundName, setSoundsName] = useState(soundsName[soundType]);
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(true);

  const play = (key, sound) => {
    setSoundsName(sound);

    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSounds = () => {
    if (soundType === 'heaterKit') {
      setSoundType('pianoKit');
      setSounds(soundsGroup.pianoKit);
      setSoundsName(soundsName.pianoKit);
    } else {
      setSoundType('heaterKit');
      setSounds(soundsGroup.heaterKit);
      setSoundsName(soundsName.heaterKit);
    }
  };

  const handleVolume = e => {
    setVolume(e.target.value);
  };

  const setKeyVolume = () => {
    const audios = sounds.map(sound =>
      document.getElementById(sound.keyTrigger)
    );
    audios.forEach(audio => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  const offOn = () => {
    setPower(!power);
    let btn = document.querySelector('.onOff');
    btn.addEventListener('click', function () {
      if (power) {
        btn.style.backgroundColor = 'green';
      } else {
        btn.style.backgroundColor = 'red';
      }
    });
  };

  return (
    <div className="App" id="drum-machine">
      {setKeyVolume()}
      <div className="drum-wrapper">
        <Keyboard power={power} play={play} sounds={sounds} />
        <Controller
          name={soundName || soundName[soundType]}
          changeSounds={changeSounds}
          volume={volume}
          handleVolume={handleVolume}
          power={power}
          offOn={offOn}
        />
      </div>
    </div>
  );
}

export default App;
