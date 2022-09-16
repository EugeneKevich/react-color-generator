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
        width: '100vw',
        height: '100vh',
        background: '#d3d3d3',
      }}
    >
      <div
        style={{
          width: 1200,
          height: 550,
          margin: 'auto',
          padding: 50,
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
          }}
        >
          {color}
        </div>
        <div
          style={{
            width: 1200,
            height: 200,
            display: 'flex',
            margi: 'auto',
          }}
        >
          <div
            style={{
              width: 400,
              marginLeft: 50,
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#d3d3d3',
              padding: 50,
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
              height: 47,
              borderRadius: 10,
              backgroundColor: 'tomato',
              fontSize: 18,
              marginLeft: 100,
              marginTop: 50,
            }}
            onClick={() => {
              setColor(
                randomColor({ hue: userHue, luminosity: userSaturation }),
              );
            }}
          >
            Generate Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
