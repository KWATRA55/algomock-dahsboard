import React from 'react'
import { AddAlt, Chip, ChartColumn } from '@carbon/icons-react';

function Sidebar() {
  return (
    <div className="nav-bar" style={{background: '#212529', width: '5%',height: '100%',position: 'fixed', top:'0'}}>
            <nav style={{ height:'60%', display:'flex', flexDirection:'column',  justifyContent:'space-evenly',alignItems:'center',position:'relative', top:'25%'}}>
                <a href='/create-algo' style={{color : '#fff', marginLeft:'60%', width:'100%', height:'100%', cursor:'pointer'}}>
                  <AddAlt size="28"/>
                </a>
                <a href='/dashboard' style={{color : '#fff', marginLeft:'60%', width:'100%', height:'100%', cursor:'pointer'}}>
                  <Chip size="24"/>
                </a>
                <a href='/reports' style={{color : '#fff', marginLeft:'60%', width:'100%', height:'100%', cursor:'pointer'}}>
                  <ChartColumn size="24"/>
                </a>
                <Chip />
            </nav>
    </div>
  )
}

export default Sidebar