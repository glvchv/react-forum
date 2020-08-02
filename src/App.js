import React from 'react';
import './App.css';
import Posts from './components/posts';
import Login from './components/login';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <Posts />
      <Login />
    </div>
  );
}

export default App;
