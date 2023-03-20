import React from 'react'
import Button from 'react-bootstrap/Button';

function BrokerLogin() {
  return (
    <div style={{margin: '15vh 7vw'}}>
          <h1 style={{fontSize: '20px', fontFamily: 'Roboto, Helvetica, sans-serif'}}><b>Select Client ID / Broker:</b></h1>
          <h2 style={{color:'gray', margin:'2vh 0'}}>Select account :</h2>
          <h2 style={{ margin:'2vh 0'}}>No broker has been configured. Configure atleast one broker first</h2>
          <Button variant="primary" href={`/broker-setup`}>Broker Setup</Button>
          
        
    </div>
  )
}

export default BrokerLogin