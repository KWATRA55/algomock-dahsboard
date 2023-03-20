import React from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import BrokerSetup from '@/components/dashboard/BrokerSetup'

function broker_setup() {
  return (
    <div>
        <Header />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Sidebar />
          <BrokerSetup />
        </div>
    </div>
  )
}

export default broker_setup