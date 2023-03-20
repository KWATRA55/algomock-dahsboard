import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Checkbox, Search} from '@carbon/icons-react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ItemColumn from './ItemColumn';
import {algoBox} from '../../styles/styles.module.css'
import AlgoItem from './AlgoItem';

function Home() {
    return (
        <div style={{margin: '15vh 7vw', marginBottom:'0'}}>
              <h1 className='mb-4' style={{fontSize: '20px', fontFamily: 'Roboto, Helvetica, sans-serif'}}><b>Clientwise P&L</b></h1>
              <hr />
              <div style={{display : 'flex', justifyContent:'space-between', margin:'3vh 0'}}>
              <Nav>
                <NavDropdown
                id='nav-drop'
                title={<div style={{display: "inline-block"}}><Checkbox size='20'/></div>}
                menuVariant="dark"
                >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <InputGroup className="mb-3" style={{width:'36%'}}>
                <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
                <Form.Control
                  placeholder="Search by Algo name, Status, Client ID, Broker"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </div>

              <div style={{border:'outset 1px'}}>
              <Nav fill variant="tabs" defaultActiveKey="link-3">
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Friday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Monday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Tuesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-4">Wednesday</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-5">Thursday</Nav.Link>
                </Nav.Item>
              </Nav>
              <hr />
              
              <ItemColumn /><hr />
              
              
              <div className={algoBox}>
                <AlgoItem />
                <AlgoItem />
                <AlgoItem />
                <AlgoItem />
                <AlgoItem />
                <AlgoItem />
                <AlgoItem />
                <AlgoItem />
              </div>
            </div>
        </div>
      )
}

export default Home