import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compo/Navbar";

import CovidData from './CovidData';
import Statewise from './Statewise';
import Homepage from './Homepage';
import Formdata from './Formdata'
import './bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="coviddata" element={<CovidData />} />
        <Route path="statewise" element={<Statewise />} />
        <Route path="formdata" element={<Formdata />} />
      </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;