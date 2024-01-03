import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Greet';
import { Button } from './Button'
import SignInSide from './mui_components/Authentication/Signin';
import SignUp from './mui_components/Authentication/SignUp';
function App() {
  const [message, setMessage] = useState(0)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignInSide/>}/>
          <Route path="/sign-in" element={<SignInSide/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/dashboard" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
