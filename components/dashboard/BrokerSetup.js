import React, { useState } from 'react';
import AccountCard from './AccountCard'
import AccountForm from './AccountForm'
import TestForm from '@/assets/dashboard/Test';


function BrokerSetup() {

  const configuration = {
    'zerodha' : ['apiKey', 'apiSecret'],
    'fyers' : ['apiKey', 'apiSecret'],
    'angel' : ['apiKey', 'apiSecret'],
    'finvasia' : ['apiKey', 'apiSecret', 'imei', 'vendorCode']
}

  return (
    <div style={{margin: '15vh 7vw'}}>
          <h3 style={{ fontFamily: 'Roboto, Helvetica, sans-serif'}}><b>Select Client ID / Broker:</b></h3>
          <h4 style={{color:'gray', margin:'2vh 0'}}>Select broker :</h4>

          {/* <div >
            <TestForm name1='FINVASIA' imageUrl1="https://shoonya.com/static/img/shoonya_logo.1937b07.png" 
            name2='FYERS' imageUrl2='https://assets.fyers.in/images/logo.svg' 
            name3='ANGELONE' imageUrl3='https://w3assets.angelone.in/wp-content/uploads/2022/03/AO-logo-Desktop.png?v2'
            name4='ZERODHA' imageUrl4='https://zerodha.com/static/images/logo.svg'/>
          </div> */}

          <div style={{display:'flex', justifyContent:'space-around'}}>
            <AccountCard name="ZERODHA" imageUrl='https://zerodha.com/static/images/logo.svg' config={configuration.zerodha}/>
            <AccountCard name="ANGEL" imageUrl='https://w3assets.angelone.in/wp-content/uploads/2022/03/AO-logo-Desktop.png?v2' config={configuration.angel}/>
            <AccountCard name="FYERS" imageUrl='https://assets.fyers.in/images/logo.svg' config={configuration.fyers}/>
            <AccountCard name="FINVASIA" imageUrl='https://shoonya.com/static/img/shoonya_logo.1937b07.png' config={configuration.finvasia}/>
          </div>

    </div>
  )
}

export default BrokerSetup