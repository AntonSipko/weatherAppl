import React from 'react';

import './App.css';
import { Timer } from './components/Timer';

function App() {
  return <div>
    <Timer cityCountry="London"/>
    <Timer cityCountry="Vladivostok"/>
    <Timer cityCountry="KAKAHA"/>
    <Timer cityCountry="Toronto"/>
    </div>
}

export default App;
