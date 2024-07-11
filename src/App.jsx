import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ReduxTutorial from './components/ReduxTutorial';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/redux' element={<ReduxTutorial />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;