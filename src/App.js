import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import GoalKeeper from './components/Pages/GoalKeeper';
import Sight from './components/Pages/Sight';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/goal' element={<GoalKeeper />} />
        <Route path='/sight/:level' element={<Sight />} />
      </Routes>
    
       
      </div>
    </BrowserRouter>
   
  );
}

export default App;
