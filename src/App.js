import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>LUNA WEB SOLUTIONS</h1>
        <h3>VideoChat</h3>
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