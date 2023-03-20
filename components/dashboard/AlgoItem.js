import React from 'react'
import {algoItem, red, redText} from '../../styles/styles.module.css'
import Form from 'react-bootstrap/Form';
import {Checkbox, OverflowMenuVertical} from '@carbon/icons-react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-dropdown';

function AlgoItem() {
    const demoOptions = ['demo 1', 'demo 2', 'demo 3', 'demo 4'];
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'2vh 0'}}>
        <span className={algoItem} style={{width:'5%'}}><Checkbox size='20'/></span>
        <span className={algoItem}><Form.Check type="switch" id="custom-switch"/></span>
        <span className={algoItem} ><Button variant="outline-warning">Ready</Button></span>
        <Dropdown options={demoOptions} className={algoItem} value={demoOptions[0]} placeholder="Select an option" />
        <span className={algoItem} ><p className={redText}>-54</p></span>
        <span className={algoItem} ></span>
        <span className={algoItem}><span className={red} /></span>
        <span className={algoItem} >ATM Straddle</span>
        <span className={algoItem}>
        <Button variant='outline-secondary'><OverflowMenuVertical /></Button>
        </span>
    </div>
  )
}

export default AlgoItem