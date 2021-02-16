import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

const App = () => {
  const date = new Date();
  const today = date.getDay();
  const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  console.log('*******************');
  console.log(
    `Oh hello there!! You're looking especially lovely on this fine ${weekArray[today]}!!`
  );
  console.log(
    "But really, thanks for stopping by. Until we meet again, be kind, be curious, bring a snack, and always pet any cats you find along your way. Here's hoping our adventures intertwine in the future!"
  );
  console.log('If you want to see other fun flotsam and jetsam, drop by kendraosburn.com.');
  console.log('*******************');
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
