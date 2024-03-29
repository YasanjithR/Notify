import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Preloader from "./pages/Preloader";
import FilteredNotes from "./pages/FilteredNotes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="pages">
          <Routes>
            <Route path="/" element={<Preloader />} />
            <Route path="/home" element={<Home />} />
            <Route path="/FilteredNotes" element={<FilteredNotes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
