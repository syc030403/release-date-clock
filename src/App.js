import logo from './logo.svg';
import './App.css';
import Countdown from './ACVIcounter';
import VideoPlayer from './ACVIvideo';
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
