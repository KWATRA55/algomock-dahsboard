import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {accountCardImage} from '../../styles/styles.module.css'

function AccountForm({name, imageUrl}) {
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);

  const handleButtonClick = (formNumber) => {
    switch (formNumber) {
      case 1:
        setShowForm1(true);
        setShowForm2(false);
        setShowForm3(false);
        setShowForm4(false);
        break;
      case 2:
        setShowForm1(false);
        setShowForm2(true);
        setShowForm3(false);
        setShowForm4(false);
        break;
      case 3:
        setShowForm1(false);
        setShowForm2(false);
        setShowForm3(true);
        setShowForm4(false);
        break;
      case 4:
        setShowForm1(false);
        setShowForm2(false);
        setShowForm3(false);
        setShowForm4(true);
        break;
      default:
        break;
    }
  }


  return (
    <div>

        <div style={{textAlign:'center', backgroundColor:'#efeeee', height:'25vh', width:'15vw', borderRadius:'5px'}}>
            <img src={imageUrl} className={accountCardImage}/>
            <h1 style={{margin : '2vh 0'}}>{name}</h1>
            <Button as="input" onClick={() => handleButtonClick(1)} type="button" value="Setup" />
        </div>

      <button onClick={() => handleButtonClick(1)}>Form 1</button>
      <button onClick={() => handleButtonClick(2)}>Form 2</button>
      <button onClick={() => handleButtonClick(3)}>Form 3</button>
      <button onClick={() => handleButtonClick(4)}>Form 4</button>

      {showForm1 && 
        <form>
            <h1>FINVASIA Account</h1>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                style={{width: '30vw'}}
            />
            <Form.Label>API Secret</Form.Label>
            <Form.Control
                id="apiKey"
                style={{width: '30vw'}}
            />
            <Form.Label>IMEI</Form.Label>
            <Form.Control
                id="imei"
                style={{width: '30vw'}}
            />
            <Form.Label>Vendor Code</Form.Label>
            <Form.Control
                id="vendorCode"
                style={{width: '30vw'}}
            />
        </form>}

    
      {showForm2 && 
        <form>
            <h1>FYERS Account</h1>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                style={{width: '30vw'}}
            />
            <Form.Label>API Secret</Form.Label>
            <Form.Control
                id="apiSecret"
                style={{width: '30vw'}}
            />
        </form>}


      {showForm3 && 
        <form>
            <h1>Angel One Account</h1>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                style={{width: '30vw'}}
            />
            <Form.Label>API Secret</Form.Label>
            <Form.Control
                id="apiSecret"
                style={{width: '30vw'}}
            />
        </form>}


      {showForm4 && 
        <form>
            <h1>Zerodha Account</h1>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                style={{width: '30vw'}}
            />
            <Form.Label>API Secret</Form.Label>
            <Form.Control
                id="apiSecret"
                style={{width: '30vw'}}
            />
        </form>}
    </div>
  );
}

export default AccountForm;
