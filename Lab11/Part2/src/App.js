import { Pageone, Pagetwo} from "./Book"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Pageone />} />
          <Route path="/pagetwo" element={<Pagetwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
