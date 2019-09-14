import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/~reusables/atoms/Card';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <button>
          <Link to="/profile">Profile</Link>
        </button>
      </div>
    </Router>
  );
}

export default App;
