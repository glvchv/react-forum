import React, { useState } from 'react';
import './App.css';
import authContext from './context/authContext';

function App(props) {
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    });
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser({
      loggedIn: false
    });
  }

  return (
    <authContext.Provider value={{
      user,
      logIn,
      logOut
    }}>
      {props.children}
    </authContext.Provider>
  );
}

export default App;
