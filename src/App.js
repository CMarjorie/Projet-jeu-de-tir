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

function App() {

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
  return (
    <scoreContext.Provider value={scoreBoard}>
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/goal' element={<GoalKeeper />} />
        <Route path='/sight/:level' element={<Sight />} />
      </Routes>
    
       
      </div>
    </BrowserRouter>
    </scoreContext.Provider>
  );
}

export default App;
