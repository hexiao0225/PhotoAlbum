import React from "react";
import "./styles/style.css";
import CountryPage from "./components/CountryPage";
import SidePanel from "./components/SidePanel";
const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <SidePanel />
        <CountryPage />
      </header>
    </div>
  );
};

export default App;
