import React from 'react';
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/LoginForm";
import Friends from "./Components/Friends";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/login">Log In</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/login">
        <button onClick={() => localStorage.clear()}>Log out</button>
      </Link>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/friends" component={Friends} />

    </div>
  );
}

export default App;
