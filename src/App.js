import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<div></div>} />
        <Route path='/data' element={<div></div>} />
        <Route path='/statistics' element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
