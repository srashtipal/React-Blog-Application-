import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { isLoggedIn } from '../Auth/AuthIndex';

const  Privateroute=()=> {

  

  if(isLoggedIn()){
    return<Outlet/>
  }else{
    return <Navigate to={"/login"}/>;
  }
}

export default Privateroute