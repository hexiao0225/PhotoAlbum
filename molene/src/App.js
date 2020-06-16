import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import Guadalajara from "./components/Guadalajara";
import Header from "./components/Header";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={CountryPage} />
                <Route exact path='/algeria' component={CountryPage} />
                <Route exact path='/guadalajara' component={Guadalajara} />
                <Route exact path='/santafe' component={Guadalajara} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
