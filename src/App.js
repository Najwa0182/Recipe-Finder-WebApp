import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RecipeState from './context/RecipeState';
import Favourite from './Pages/Favourite';
import Home from './components/Home/Home';
import Tips from './Pages/Tips';

function App() {
  return (
    <BrowserRouter>
      <RecipeState>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </div>
      </RecipeState>
    </BrowserRouter>
    
  );
}

export default App;
