import React from 'react'
import Header from '@/components/dashboard/Header'
import { useRouter } from 'next/router'
import Sidebar from '@/components/dashboard/Sidebar';
import BrokerLogin from '@/components/dashboard/BrokerLogin';

function broker_login() {

  return (
    <div>
        <Header />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Sidebar />
          <BrokerLogin />
        </div>
    </div>
  )
}

export default broker_login