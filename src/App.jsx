import * as React from 'react';
import { useState, useEffect } from 'react';
import './styles/components/app.css';
import Canvas from './components/Canvas.jsx';
import Help from './components/Help.jsx';

export default function App() {
  const [helpOpen, setHelpOpen] = useState(false);

  const closeHelpMenuOnEsc = (e) => {
    if (e.keyCode === 27 && helpOpen) {
      setHelpOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeHelpMenuOnEsc);

    return () => {
      document.removeEventListener('keydown', closeHelpMenuOnEsc);
    };
  }, [helpOpen]);

  return (
    <div className="app">
      <div className="title-bar">
        <h1 className="title">Graph Visualizer</h1>
        <div
          className="help"
          onClick={() => {
            setHelpOpen(true);
          }}
        >
          ?
        </div>
      </div>
      <Canvas />
      {helpOpen && <Help setHelpMenu={setHelpOpen} />}
    </div>
  );
}
