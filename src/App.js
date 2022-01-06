import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import GoalKeeper from './components/GoalKeeper';
import Sight from './components/Sight';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/goal' element={<GoalKeeper />} />
        <Route path='/sight' element={<Sight />} />
      </Routes>
     <div className="App">
        
      </div>
    </BrowserRouter>
   
  );
}

export default App;
