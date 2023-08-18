/*
 * src/App.tsx
 * contains the entire app and its components
 */

import React from 'react';

import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import AboutUs from './components/AboutUs';

//import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <VideoPlayer/>
      <AboutUs/>
    </div>
  );
}

export default App;
