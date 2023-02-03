import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useState } from 'react';
import DataStructurePage from './pages/DataStructurePage';
axios.defaults.baseURL = 'https://fakerapi.it/api/v1'
function App() {
  const [dataStructure, setDataStructure] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DataStructurePage structure={dataStructure} onChange={setDataStructure} />} />
        <Route path='/data' element={<div></div>} />
        <Route path='/statistics' element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
