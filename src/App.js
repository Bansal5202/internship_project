import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <Router>
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About name="bansal"/>}/>
      
      </Routes>

    </div>
    </Router>
  );
}

export default App;
