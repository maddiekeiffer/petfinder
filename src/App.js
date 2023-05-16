import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/saved' element={<SavedPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
