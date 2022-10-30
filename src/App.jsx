import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Userinfosignup from './Pages/Userinfosignup';
import Userinfosignin from './Pages/Userinfosignin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userinfosignin />} />
          <Route path="/homescreen" element={<Homepage />}></Route>
          <Route path="/signup" element={<Userinfosignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
