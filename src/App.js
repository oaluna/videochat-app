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
              <h1>luna<br/>
              {' '}web<br/>
              {' '}dev<br/></h1>
            </div>
            <div id="hologram" className='color2'>
              <h1>luna<br/>
              web <br/>
              dev <br/></h1>
            </div>
            <div id="hologram" className='color3'>
              <h1>luna<br/>
              web <br/>
              dev <br/></h1>
            </div>
          </div >
        <h3>Video-Chat Demo</h3>
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