import logo from './logo.svg';
import './App.css';
import Countdown from './ACVIcounter';
import ACVIcounter from './ACVIcounterDEMO';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Countdown/>
        </p>
        
        <a
          className="App-link"
          href="https://store.steampowered.com/app/1888160/__VI/?l=koreana"
          target="_blank"
          rel="noopener noreferrer"
        >
          ARMORED CORE VI FIRES OF RUBICON
        </a>
      </header>
    </div>
  );
}

export default App;
