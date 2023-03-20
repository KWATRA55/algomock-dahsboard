import Reports from '@/components/dashboard/Reports'
import React from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'


function reports() {
  return (
    <div>
        <Header />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Sidebar />
          <Reports />
        </div>
    </div>
  )
}

export default reports