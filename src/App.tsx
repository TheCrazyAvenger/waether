import React from 'react';
import './App.scss';
import { WeatherNow } from './components/WeatherNow/WeatherNow';
import { WeatherWeek } from './components/WeatherWeek/WeatherWeek';
import { Navbar } from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <WeatherNow />
      <div className='container'>
        <WeatherWeek />
      </div>
    </div>
  );
};

export default App;
