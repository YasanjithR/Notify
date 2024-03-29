
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Preloader from './pages/Preloader';
import FilteredNotes from './pages/FilteredNotes';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <div class="pges">
          <Routes>
            <Route
            
            path="/"
            element={<Home/>}
            
            />
          </Routes>

          <Routes>
            <Route
            
            path="/FilteredNotes"
            element={<FilteredNotes/>}
            
            />
          </Routes>

          
          
          </div>  
      </BrowserRouter>
    
    </div>
  );
}

export default App;
