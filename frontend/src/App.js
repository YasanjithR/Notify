
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Preloader from './pages/Preloader';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <div class="pges">
          <Routes>
            <Route
            
            path="/"
            element={<Preloader/>}
            
            />
          </Routes>
          
          </div>  
      </BrowserRouter>
    
    </div>
  );
}

export default App;
