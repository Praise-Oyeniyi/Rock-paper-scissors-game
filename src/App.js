import './App.css';
import { useState } from 'react';
import Index from './Pages/Index';
import {Routes, Route} from 'react-router-dom';
import ComputerTurn from './Pages/ComputerTurn';
import { useEffect } from 'react';

function App() {
  const [rules, knowRules] = useState(false)
  const [bonus, bonusAdd] = useState(false);
  const [score, updatedScore] = useState(0);

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem('score'));
    if (score){updatedScore(score)}
  }, [])



  return (
    <Routes >
      <Route exact path='/' element={<Index rules={rules} knowRules={knowRules} bonus={bonus} bonusAdd={bonusAdd} score={score} updatedScore={updatedScore}/>}/>
      <Route path='/computer/:selected' element={<ComputerTurn rules={rules} knowRules={knowRules} bonus={bonus} bonusAdd={bonusAdd} score={score} updatedScore={updatedScore}/>}/>
    </Routes> 
  );
}

export default App;
