import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import questionsData from './data/questionsData';


function App() {
  return (
    <div className="App">
      <Question data={questionsData} />
    </div>
  );
}

export default App;
