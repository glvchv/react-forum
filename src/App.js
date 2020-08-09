import React, { useState, useEffect } from 'react';
import './App.css';
import authContext from './context/authContext';
import { getCookie } from './utils/getCookie';
import { verifyUser } from './services/userService';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function App(props) {
  const [user, setUser] = useState(null);

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    });
    localStorage.setItem('username', user.username);
    localStorage.setItem('userId', user.id);
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.clear();
    setUser({
      loggedIn: false
    });
  }

  useEffect(() => {
    const token = getCookie('x-auth-token');
    verifyUser(token, (user) => {
      logIn(user);
    });

  }, [])

  return (
    <>
      <ReactNotification />
      <authContext.Provider value={{
        user,
        logIn,
        logOut
      }}>
        <div className='main-container'>
          {props.children}
        </div>
      </authContext.Provider>
    </>
  );
}

export default App;
