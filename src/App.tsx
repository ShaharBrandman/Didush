/*
 * src/App.tsx
 * contains the entire app and its components
 */

import React from 'react';

import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';

//import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <VideoPlayer/>
    </div>
  );
}

export default App;
