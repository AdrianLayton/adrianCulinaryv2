import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch 
} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<div className="main">
					<Header />
				  		<Switch>
                <div>Here's a Compnent</div>
					  		<Route exact path="/" component={Home} />
					  		{/* <Route path="/about" component={About} />
					  		<Route path="/cookWare" component={CookWare} />
					  		<Route path="/recipe" component={Recipe} />
					  		<Route path="/thankyou" component={ThankYou} />
					  		<Route path="/svngcalc" component={SavingCalc} /> */}
					  	</Switch>
					<Footer />
				</div>
			</BrowserRouter>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
