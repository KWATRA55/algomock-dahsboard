import React, { useEffect } from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import Home from '@/components/dashboard/Home'
import AuthContext from '@/context/AuthProvider';
import { useContext } from 'react';

function test() {
  const {auth, setAuth} = useContext(AuthContext);
  useEffect(() => {
    console.log('auth context : ', auth);
    console.log(auth.length)
  }, []);
  return (
    <div>
        {/* {Object.keys(auth).length !== 0 ?  */}
        <div>
          <Header />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Sidebar />
            <Home />
          </div>
        </div>
        {/* </div> : null} */}
    </div>
  )
}

export default test