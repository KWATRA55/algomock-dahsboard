import React from 'react'
import {item} from '../../styles/styles.module.css'
import {ArrowsVertical} from '@carbon/icons-react';

function ItemColumn() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', backgroundColor: '#eeeeef', padding:'1vh'}}>
        <span className={item} style={{width:'5%'}}></span>
        <span className={item}>Enable</span>
        <span className={item} style={{display:'flex'}}>Status<ArrowsVertical style={{margin: '1vh'}}/></span>
        <span className={item} style={{display:'flex'}}>Client ID / Broker</span>
        <span className={item} style={{display:'flex'}}>MTM<ArrowsVertical style={{margin: '1vh'}}/></span>
        <span className={item} style={{display:'flex'}}>Alerts<ArrowsVertical style={{margin: '1vh'}}/></span>
        <span className={item}><ArrowsVertical style={{margin: '1vh'}}/></span>
        <span className={item} style={{display:'flex'}}>Algo name<ArrowsVertical style={{margin: '1vh'}}/></span>
        <span className={item}>Actions</span>
    </div>
  )
}

export default ItemColumn