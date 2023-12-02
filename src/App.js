import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Cult } from './pages/cult/cult';
import { Navbar } from './components/navbar';
import { Home } from './pages/home/home';
import { Tech } from './pages/tech/tech';
import { Sports } from './pages/sports/sports';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/tech' element={<Tech/>}/> 
          <Route path='/cult' element={<Cult/>}/> 
          <Route path='/sports' element={<Sports/>}/> 
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
