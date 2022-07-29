// import logo from './logo.svg';
// import './App.css';
import { Body } from './Comps/Body';
import { Footer } from './Comps/Footer';
import { Header } from './Comps/Header';
import { Logo } from './Comps/Logo';

function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Logo />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
