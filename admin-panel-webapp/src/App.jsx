import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/admin/*" element={isAuthenticated ? <AdminPanel onLogout={handleLogout} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;