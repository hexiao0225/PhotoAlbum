import React from "react";
import "./styles/style.css";
import Introduction from "./components/Introduction";
import SidePanel from "./components/SidePanel";
const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <SidePanel />
        <Introduction />
      </header>
    </div>
  );
};

export default App;
