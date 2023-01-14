import axios from 'axios';
import React, {useState, useEffect, useRef, createContext} from 'react';

const Context = createContext();

const Provider = ({children}) => {

  const [domain, setDomain] = useState("http://10.0.3.2:8000/");
  // const [domain, setDomain] = useState("http://openport.io:20639");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [token, setToken] = useState();
  const [userObj, setuserObj] = useState();
  const [globalProducts, setGlobalProducts] = useState([]);



  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    userObj,
    setuserObj,
    globalProducts,
    setGlobalProducts

  };

  
  return <Context.Provider value={globalContext}>{children}</Context.Provider>;
};

export {Context, Provider};