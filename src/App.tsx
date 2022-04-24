import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import { BeerList } from './BeerList';
import About from './About';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<BeerList beers={["Coreff", "Corona", "Mort Subite"]}/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;