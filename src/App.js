import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RewardsPage from './components/RewardsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Reward-Summary" element={<LoginPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
