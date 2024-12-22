import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './routes/Home'
import GenerationOne from './routes/GenerationOne'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gen1" element={<GenerationOne/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
