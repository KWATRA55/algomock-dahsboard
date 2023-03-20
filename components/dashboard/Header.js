import React from 'react'
import { useRouter } from 'next/router'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Password, UserAvatar, Receipt, Badge, Logout, Settings, ChartColumn, CheckmarkOutline } from '@carbon/icons-react';


function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" style={{ position:'fixed', width: '100%', zIndex:'3'}}>
    <Container style={{width:'100%', height: "7vh", display:'flex', justifyContent:"space-between"}}>
      <div className='headerLeft' style={{display:'flex'}}>
        <img src={require('../../assets/dashboard/logo.jpg')} alt='' className='logo' style={{height:'20px', width:"20px", margin:'1vw'}}/>
        <Navbar.Brand href="#home">Title</Navbar.Brand>
      </div>
      <div className='headerRight' style={{display:'flex'}}>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Button variant="outline-primary">Documentation</Button>   
          </Nav.Link>
          <Nav.Link href="#features">
            <Button variant="outline-primary">Instruction</Button>
          </Nav.Link>
          <Nav.Link href={`/broker-login`}>
            <Button variant="outline-primary" style={{display:'flex'}}><Password style={{marginTop:'4%'}}/> Broker Login</Button>
          </Nav.Link>

          <NavDropdown title="Username" style={{margin:'1vh'}}>
            <NavDropdown.Item href="#action3" style={{display:'flex'}}><UserAvatar style={{margin:'4%'}}/>My Account</NavDropdown.Item>
            <NavDropdown.Item href="#action4" style={{display:'flex'}}><Receipt style={{margin:'4%'}}/>Billing</NavDropdown.Item>
            <NavDropdown.Item href="#action4" style={{display:'flex'}}><Badge style={{margin:'4%'}}/>Subscription</NavDropdown.Item>
            <NavDropdown.Item href="#action3" style={{display:'flex'}}><Settings style={{margin:'4%'}}/>Broker Setup</NavDropdown.Item>
            <NavDropdown.Item href="#action4" style={{display:'flex'}}><ChartColumn style={{margin:'4%'}}/>Reports</NavDropdown.Item>
            <NavDropdown.Item href="#action3" style={{display:'flex'}}><CheckmarkOutline style={{margin:'4%'}}/>Dark Theme</NavDropdown.Item>
            <NavDropdown.Item href="#action4" style={{display:'flex'}}><Logout style={{margin:'4%'}}/>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Container>
    </Navbar>
    </div>
  )
}

export default Header