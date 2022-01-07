import './App.css';
import { createContext, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import GoalKeeper from './components/Pages/GoalKeeper';
import Sight from './components/Pages/Sight';

export const scoreContext = createContext({
  score: 0,
  setScore: ()=>{},
})

export const lifePointsContext = createContext({
  lifePoints : 0,
  setLifePoints: ()=>{}
})

export const timerContext = createContext({
  timer : 0,
  setTimer: ()=>{},
})

function App() {
  const [lifePoints, setLifePoints] = useState(5);

  const lP = {
    lifePoints: lifePoints,
    setLifePoints : decrementLifePoints
  }

  const [score, setScore] = useState(0);

    const scoreBoard = {
        score: score,
        setScore: incrementScore
    }

    function incrementScore(){
        console.log(score);
        let newScore = score+1;
        console.log(newScore);
        setScore(newScore);
    }

    function decrementLifePoints(){
      let newLifePoints = lifePoints-1;
      setLifePoints(newLifePoints);
  }
  const [timer, setTimer] = useState(3);
  const [isTimerOver, setIsTimerOver] = useState(false);
  
  const timerInitialStart= {
    timer: timer,
    isTimerOver: isTimerOver,
    setIsTimerOver: setIsTimerOver,
    setTimer: timerStart
  }

   function timerStart(){
    console.log("timer start");
      let counter = timer;
      let countDown = setInterval(function(){
        console.log(counter);
        counter--;
        setTimer(counter);
        if (counter === 0) {
          setIsTimerOver(true); 
          clearInterval(countDown);

        }
      }, 1000);
      
    }

  return (
    <lifePointsContext.Provider value={lP}>
    <scoreContext.Provider value={scoreBoard}>
    <timerContext.Provider value={timerInitialStart}>
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/goal' element={<GoalKeeper />} />
        <Route path='/sight/:level' element={<Sight />} />
      </Routes>
    
       
      </div>
    </BrowserRouter>
    </timerContext.Provider>
    </scoreContext.Provider>
    </lifePointsContext.Provider>
  );
}

export default App;
