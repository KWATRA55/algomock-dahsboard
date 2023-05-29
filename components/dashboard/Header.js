import React from 'react'
import Router from 'next/router'
import {logo} from '../../assets/dashboard/logo.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Password, UserAvatar, Receipt, Badge, Logout, Settings, ChartColumn, CheckmarkOutline } from '@carbon/icons-react';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/functions/dashboardFunctions';
import { logoutUser } from '@/functions/request';
import AuthContext from '@/context/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {headerButton} from '../../styles/styles.module.css'
import { getMarketPrice } from '@/functions/socketFunctions';


function Header() {
  const {setAuth} = useContext(AuthContext);

  let refreshToken = getLocalStorage('refreshToken');
  const name = getLocalStorage('name');
  const handleLogout = async () => {
    let res = await logoutUser(refreshToken);
    if(res.status === 204){
      setAuth({});
      clearLocalStorage();
      Router.push('/login');
    }
  }

  const localMarketData = JSON.parse(getLocalStorage('localMarketData'))

  const [currentPrices, setCurrentPrices] = useState({
    INDEX_NIFTY : localMarketData?.INDEX_NIFTY || '----',
    INDEX_BANKNIFTY: localMarketData?.INDEX_BANKNIFTY || '----',
    INDEX_FINNIFTY : localMarketData?.INDEX_FINNIFTY || '----'
  });

  
const socketData = () => {
  const socket = getMarketPrice();

  socket.addEventListener('message', function (event) {
    const message = JSON.parse(event.data);
    if (message.event === 'feed') {
      let data = message.data;
      Object.keys(currentPrices).forEach((key) => {        
        let newVal = data[key];
        key = document.getElementById(key);
        let previousVal = parseInt(key.textContent);
        
        if(newVal>previousVal)
        {
          key.style.color = 'green';
        }
        else if(newVal<previousVal)
        {
          key.style.color = 'red';
        }
      })
      
      setCurrentPrices({
        INDEX_NIFTY : data.INDEX_NIFTY,
        INDEX_BANKNIFTY : data.INDEX_BANKNIFTY,
        INDEX_FINNIFTY : data.INDEX_FINNIFTY
      })
     

      setLocalStorage('localMarketData', JSON.stringify(data));
    }
  });
  //     Object.keys(currentPrices).forEach((key) => {        
  //       let newVal = message[key];
  //       key = document.getElementById(key);
  //       let previousVal = parseInt(key.textContent);
        
  //       if(newVal>  previousVal)
  //       {
  //         key.style.color = 'green';
  //       }
  //       else if(newVal<previousVal)
  //       {
  //         key.style.color = 'red';
  //       }
  //     })
      
  //     setCurrentPrices({
  //       INDEX_NIFTY : message.INDEX_NIFTY,
  //       INDEX_BANKNIFTY : message.INDEX_BANKNIFTY,
  //       INDEX_FINNIFTY : message.INDEX_FINNIFTY
  //     })
  //     setLocalStorage('niftyLocalData', message.INDEX_NIFTY);
  //     setLocalStorage('bankniftyLocalData', message.INDEX_BANKNIFTY);
  //     setLocalStorage('finniftyLocalData', message.INDEX_FINNIFTY);

  //     //const marketData = getLocalStorage('marketData')
  //     //console.log('local market data : ', );
  //   });
}

  useEffect(() => {
    setInterval(() => {
      socketData();
    }, 2000);
  }, []);


  return (
    <div>
    <Navbar bg="dark" variant="dark" style={{ position:'fixed', width: '100vw', zIndex:'3'}}>
    <Container style={{ height: "7vh", width:'100vw', display:'flex', justifyContent:"space-between"}}>
      <div className='headerLeft' style={{display:'flex'}}>
        {/* <img src={logo} alt='' className='logo' style={{height:'20px', width:"20px", margin:'1vw'}}/> */}
        <Navbar.Brand href="#home">AlgoMock</Navbar.Brand>
      </div>

      <div className='headerMiddle' style={{display:'flex', color:'white', paddingTop:'0.3vh', fontSize:'15px'}}>
        <div style={{marginRight:'1vw'}}>
          <span>NIFTY : <span id='INDEX_NIFTY'>{currentPrices.INDEX_NIFTY}</span></span>
          
        </div>
        <div style={{marginRight:'1vw'}}>
          <span>BANKNIFTY : <span id='INDEX_BANKNIFTY'>{currentPrices.INDEX_BANKNIFTY}</span></span>
  
        </div>
        <div style={{marginRight:'1vw'}}>
          <span>FINNIFTY : <span id='INDEX_FINNIFTY'>{currentPrices.INDEX_FINNIFTY}</span></span>
    
        </div>
      </div>

      <div className='headerRight' style={{display:'flex'}}>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Button variant="outline-primary" className='headerButton'>Documentation</Button>
          </Nav.Link>
          <Nav.Link href="#features">
            <Button variant="outline-primary" className='headerButton'>Instruction</Button>
          </Nav.Link>
          <Nav.Link href={`/broker-login`} className='headerButton'>
            <Button variant="outline-primary" style={{display:'flex'}}><Password style={{marginTop:'4%'}}/> Broker Login</Button>
          </Nav.Link>

          <NavDropdown title={name} style={{margin:'1vh'}} >
            <NavDropdown.Item href="#action3" style={{display:'flex'}}><UserAvatar style={{margin:'4%'}}/>My Account</NavDropdown.Item>
            <NavDropdown.Item href="#action4" style={{display:'flex'}}><Receipt style={{margin:'4%'}}/>Billing</NavDropdown.Item>
            <NavDropdown.Item href="#action4" style={{display:'flex'}}><Badge style={{margin:'4%'}}/>Subscription</NavDropdown.Item>
            <NavDropdown.Item href="#action3" style={{display:'flex'}}><Settings style={{margin:'4%'}}/>Broker Setup</NavDropdown.Item>
            <NavDropdown.Item href="#action4" style={{display:'flex'}}><ChartColumn style={{margin:'4%'}}/>Reports</NavDropdown.Item>
            <NavDropdown.Item href="#action3" style={{display:'flex'}}><CheckmarkOutline style={{margin:'4%'}}/>Dark Theme</NavDropdown.Item>
            <NavDropdown.Item style={{display:'flex'}} onClick={handleLogout}><Logout style={{margin:'4%'}}/>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Container>
    </Navbar>
    </div>
  )
}

export default Header