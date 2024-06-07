import logo from './4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pemuda Pancasila</h1>
        <div className="App-content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Saya Adam Hanafi Putra Mahasiswa Teknologi Informasi
            Anggota Pemuda Pancasila.
          </p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
      <div className="App-footer">
        <p>Footer content goes here.</p>
      </div>
    </div>
  );
}

export default App;
