import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  console.log(color);

  return (
    <div className="colorApp">
      <div
        style={{
          width: 800,
          height: 400,
          backgroundColor: color,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          margin: '50px auto',
          border: '1px solid',
          borderRadius: '30px',
        }}
      >
        <h1>Generated color: {color} </h1>
      </div>

      <br />

      <div
        style={{
          width: 72,
          height: 25,
          margin: '0 auto',
        }}
      >
        <button
          onClick={() => {
            setColor(randomColor());
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
