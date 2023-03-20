import React from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import CreateAlgo from '@/components/dashboard/CreateAlgo'


function test() {
  return (
    <div>
        <Header />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Sidebar />
          <CreateAlgo />
        </div>
    </div>
  )
}

export default test