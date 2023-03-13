import React from 'react';

import './App.css';
import { Timer } from './components/Timer';

function App() {
  return <div style={{ display: 'flex', flexDirection: 'column'}}>
    <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-around'}}>
      <Timer cityCountry="London" />
      <Timer cityCountry="Vladivostok" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-around'}}>
      <Timer cityCountry="Israel" />
      <Timer cityCountry="Toronto" />
    </div>
  </div>
}

export default App;
