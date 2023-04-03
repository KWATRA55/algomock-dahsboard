import React, { useEffect } from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import Home from '@/components/dashboard/Home'
import AuthContext from '@/context/AuthProvider';
import { useContext } from 'react';
import Router from 'next/router'
import { getLocalStorage } from '@/functions/dashboardFunctions';
import { getUserData } from '@/functions/request';

function test() {
  const {auth, setAuth} = useContext(AuthContext);
  const accessToken = getLocalStorage('accessToken');
    const refreshToken = getLocalStorage('accessToken');
    const userId = getLocalStorage('userId');
  useEffect(() => {

    getUserData(accessToken, userId); // to get the user data from access token and user ID

    if (!accessToken) {
      Router.push(`/login`); 
    }

    try{
      setAuth({"accessToken" : accessToken, "userId" : userId, "refreshToken" : refreshToken});
      console.log({"accessToken" : accessToken});
      console.log("refresh token : ", refreshToken)

    }catch(err){
      console.log(err);
    }
    console.log('auth context : ', auth);
    console.log('local storage access token: ', accessToken);
    console.log('local storage user id : ', userId);
  }, []);

  return (
    <div>
        <div>
          <Header />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Sidebar />
            <Home />
          </div>
        </div>
    </div>
  )
}

export default test