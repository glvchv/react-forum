import React from 'react';

const authContext = React.createContext({
    user: null,
    logIn: () => {},
    logOut: () => {}
})

export default authContext;
