import logo from './logo.svg';
import './App.css';
import React from 'react';
import Menu from './components/Menu';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Team from './components/Team';
import {Sum} from './components/Services';
function App() {
  return (<>
    <div className="App">
      <Menu/>
      <Showcase/>
      <Services/>
      <Team/>
      {Sum}
   <div class="main">
      <h2>Packages.</h2>
      <hr/>
      <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
   </div>
    </div>
    </>
  );
}

export default App;
