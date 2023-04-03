import React from 'react'
import Router from 'next/router'
import { useEffect, useState } from 'react';
import {greenText, redText} from '../../styles/styles.module.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Route } from 'react-router-dom';
import { deleteBrokerAccount, getBrokerAccounts } from '@/functions/request';
import { getLocalStorage } from '@/functions/dashboardFunctions';

function BrokerLogin() {
  const [totalAccounts, setTotalAccounts] = useState();

  let accessToken = getLocalStorage('accessToken');

  const [brokers, setBrokers] = useState([]);

  const getAllBrokerAccounts = async () => {
    let res = await getBrokerAccounts(accessToken);
    setBrokers(res);
    setTotalAccounts(res.length);
  }

  const handleDelete = async (broker_name, broker_id) => {
    let res = await deleteBrokerAccount(accessToken, broker_name, broker_id);
    if(res === 204){
      setAccDeleted(true);
      getAllBrokerAccounts();
    }
  }
  // const brokersData = [
  //   { broker_name: 'Broker 1', broker_id: 1, api_key: '1234' },
  //   { broker_name: 'Broker 2', broker_id: 2 ,api_key: '1234'},
  //   { broker_name: 'Broker 3', broker_id: 3 ,api_key: '1234'}
  // ];
  
  const tableRows = brokers.map((broker) => (
    <tr key={broker._id}>
      <td>{broker.broker_name.toUpperCase()}</td>
      {/* <td>{broker._id}</td> */}
      <td>{broker.api_key}</td>
      {/* <td><Button variant="primary">Edit</Button></td> */}
      <td><Button variant="danger" onClick={() => handleDelete(broker.broker_name, broker._id)}>Delete</Button></td>
    </tr>
  ));
  
  const[success, setSuccess] = useState(false);
  const[accDeleted, setAccDeleted] = useState(false);

    useEffect(() => {
      getAllBrokerAccounts();

      if(Router.query.success === 'success'){
        setSuccess(true);
      }
    }, [])

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  }, [success]);

  useEffect(() => {
    if (accDeleted) {
      setTimeout(() => {
        setAccDeleted(false);
      }, 3000);
    }
  }, [accDeleted]);

  return (
    <div style={{margin: '15vh 7vw'}}>

        <div style={{justifyContent:'center', textAlign:'center', width:'100%', marginBottom:'3vh'}}>
            {success ? <h2 className={greenText}>Account Linked Successfully</h2> : null}
        </div>

        <div style={{justifyContent:'center', textAlign:'center', width:'100%', marginBottom:'3vh'}}>
            {accDeleted ? <h2 className={redText}>Account Deleted Successfully</h2> : null}
        </div>

        <h4 style={{ fontFamily: 'Roboto, Helvetica, sans-serif'}}><b>Select Client ID / Broker :</b></h4>
        <h4 style={{color:'gray', margin:'2vh 0'}}>Select account :</h4>

        {totalAccounts === 0 
        ?  
        <div>
          <h5 style={{ margin:'2vh 0'}}>No broker has been configured. Configure atleast one broker first</h5>
        </div>
        :
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Broker Name</th>
                {/* <th>Broker ID</th> */}
                <th>Api Key</th>
                {/* <th>Edit</th> */}
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </Table>
        }
          <Button variant="primary" href={`/broker-setup`}>Broker Setup</Button>  
    </div>
  )
}

export default BrokerLogin