import logo from './logo.svg';
import './App.css';
import Countdown from './Components_Css/ACVIcounter';
import VideoPlayer from './Components_Css/ACVIvideo';
import Sidebar from './Components_Css/Sidebar';
import React,{ useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <VideoPlayer/>
        </div>
        <p>
          <Countdown/>
        </p>
        <div>
        <div>
          <Sidebar width={300}>
        
          </Sidebar>
        </div>
        </div>
        <a
          className="App-link"
          href="https://store.steampowered.com/app/1888160/__VI/?l=koreana"
          target="_blank"
          rel="noopener noreferrer"
        >
          ARMORED CORE VI FIRES OF RUBICON STEAM LINK
        </a>
      </header>
    </div>
    
  );
}


export default App;
