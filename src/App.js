import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const App = () => {
  return (
    <div className="app">
      <header>
      <div className="logo">
            {' '}
            <div id="hologram" className='color1'>
              <h1>oscar{' '}armando{' '}luna</h1>
            </div>
            <div id="hologram" className='color2'>
              <h1>oscar{' '}armando{' '}luna</h1>
            </div>
            <div id="hologram" className='color3'>
              <h1>oscar{' '}armando{' '}luna</h1>
            </div>
          </div >
        <h2>Video-Chat Demo II</h2>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made using{' '}
          <span role="img" aria-label="React">
            ⚛
          </span>{' '}
          by <a href="https://oscarluna.netlify.app">Oscar Armando Luna</a>
        </p>
      </footer>
    </div>
  );
};

export default App;