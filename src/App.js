import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useState } from 'react';
import DataStructurePage from './pages/DataStructurePage';
import DataPage from './pages/DataPage';
import { generateStructure } from './api';
axios.defaults.baseURL = 'https://fakerapi.it/api/v1'
function App() {
  const [dataStructure, setDataStructure] = useState([]);
  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DataStructurePage structure={dataStructure} onChange={val => {
          setDataStructure(val);
          setData([]);
        }} />} />
        <Route path='/data' element={<DataPage
          data={data}
          onReset={() => {
            setData([])
          }}
          dataStructure={dataStructure}
          onGenerate={async total => {
            const d = await generateStructure(dataStructure, total);
            setData(prev => {
              return [...prev, ...d]
            })
          }}
        />} />
        <Route path='/statistics' element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
