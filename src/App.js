import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [userHue, setUserHue] = useState('');
  const [userSaturation, setUserSaturation] = useState('');
  const [color, setColor] = useState(randomColor());

  return (
    <div
      style={{
        width: 1200,
        height: 500,
        margin: 'auto',
      }}
    >
      <div
        style={{
          width: 1200,
          height: 500,
          backgroundColor: color,
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 48,
          alignItems: 'center',
          margin: '50px auto',
        }}
      >
        {color}
      </div>
      <div
        style={{
          width: 1200,
          height: 200,
          display: 'flex',
          margin: 'auto',
        }}
      >
        <div
          style={{
            width: 400,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <input
            style={{
              width: 180,
              height: 40,
              borderRadius: 10,
              fontSize: 18,
            }}
            placeholder="Color"
            value={userHue}
            onChange={(event) => {
              setUserHue(event.currentTarget.value);
            }}
          />

          <input
            style={{
              width: 180,
              height: 40,
              borderRadius: 10,
              fontSize: 18,
            }}
            placeholder="Saturation"
            value={userSaturation}
            onChange={(event) => {
              setUserSaturation(event.currentTarget.value);
            }}
          />
        </div>

        <button
          style={{
            width: 180,
            height: 40,
            borderRadius: 10,
            fontSize: 18,
            marginLeft: 100,
          }}
          onClick={() => {
            setColor(randomColor({ hue: userHue, luminosity: userSaturation }));
          }}
        >
          Generate Color
        </button>
      </div>
    </div>
  );
}

export default App;
