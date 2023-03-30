import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {accountCardImage} from '../../styles/styles.module.css'
import { baseUrl } from '@/functions/apiRoutes';
import { getLocalStorage } from '@/functions/dashboardFunctions';
import {greenText, redText} from '../../styles/styles.module.css'


const axios = require('axios');


function TestForm({name1,name2, name3, name4, imageUrl1, imageUrl2, imageUrl3, imageUrl4}) {
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const initialValues = {                
    apiKey: '',
    apiSecret: '',
    emei: '',
    vendorCode: ''
    };

    const configuration = {
        'zerodha' : ['api key', 'api secret'],
        'fyers' : ['api key', 'api secret'],
        'angelone' : ['api key', 'api secret'],
        'finvasia' : ['api key', 'api secret', 'emei', 'vendor code'],
    }

 const [values, setValues] = useState(initialValues);  

 const handleChange = (e) => {                
    setValues({
      ...values,                               
      [e.target.name]: e.target.value,          
    });
  };

 const setUpAccount = () => {
    const accessToken = getLocalStorage('accessToken');
    console.log(accessToken);

    const payload = {"api_key" : values.apiKey, "api_secret": values.apiSecret}

        axios.post("https://stage.algomock.in/v1/broker/zerodha/setupAccount", payload, {
            headers: {
                Authorization : `Bearer ${accessToken}`,
            }   
        })
        .then(function (response) {
        console.log(response);
        console.log('Status:', response.status);
        if(response?.status === 200){
            setSuccess(true);
        }})
        .catch(function (error) {
            setFailure(true);
            console.log('Error:', error);
        });
 }

 useEffect(() => {
    if (success || failure) {
      setTimeout(() => {
        setFailure(false);
        setSuccess(false);
      }, 5000);
    }
  }, [success, failure]);

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
        {configuration.finvasia.map((item, index) => (
            <div style={{margin:'2vh 0'}}>
                <Form.Label>Enter {item}</Form.Label>
                <Form.Control
                key={index}
                id={item}
                name={item}
                onChange={handleChange}
                placeholder='Enter your value'
                style={{width: '30vw'}}
                />
            </div>
        ))}

        <div style={{justifyContent:'center', textAlign:'center', width:'100%', marginBottom:'3vh'}}>
            {success ? <h2 className={greenText}>Account Linked Successfully</h2> : null}
            {failure ? <h2 className={redText}>Account Linking failed</h2> : null}
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{textAlign:'center', marginRight:'5vw', backgroundColor:'#efeeee', height:'25vh', width:'15vw', borderRadius:'5px'}}>
                <img src={imageUrl1} className={accountCardImage}/>
                <h1 style={{margin : '2vh 0'}}>{name1}</h1>
                <Button as="input" onClick={() =>handleButtonClick(1)} type="button" value="Setup" />
            </div>

            <div style={{textAlign:'center',marginRight:'5vw', backgroundColor:'#efeeee', height:'25vh', width:'15vw', borderRadius:'5px'}}>
                <img src={imageUrl2} className={accountCardImage}/>
                <h1 style={{margin : '2vh 0'}}>{name2}</h1>
                <Button as="input" onClick={() =>handleButtonClick(2)} type="button" value="Setup" />
            </div>

            <div style={{textAlign:'center',marginRight:'5vw',   backgroundColor:'#efeeee', height:'25vh', width:'15vw', borderRadius:'5px'}}>
                <img src={imageUrl3} className={accountCardImage}/>
                <h1 style={{margin : '2vh 0'}}>{name3}</h1>
                <Button as="input" onClick={() =>handleButtonClick(3)} type="button" value="Setup" />
            </div>

            <div style={{textAlign:'center', backgroundColor:'#efeeee', height:'25vh', width:'15vw', borderRadius:'5px'}}>
                <img src={imageUrl4} className={accountCardImage}/>
                <h1 style={{margin : '2vh 0'}}>{name4}</h1>
                <Button as="input" onClick={() =>handleButtonClick(4)} type="button" value="Setup" />
            </div>
        </div>

      {showForm1 && 
        <form>
            <h3><Form.Label htmlFor="Instrument" style={{color : 'gray', margin:'5vh 0'}}>FINVASIA Account</Form.Label></h3>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                name="apiKey"
                onChange={handleChange}
                placeholder="Enter your Api Key"
                style={{width: '30vw'}}
            />
            <Form.Label>API Secret</Form.Label>
            <Form.Control
                id="apiSecret"
                name="apiSecret"
                onChange={handleChange}
                placeholder="Enter your Api Secret"
                style={{width: '30vw'}}
            />
            <Form.Label>IMEI</Form.Label>
            <Form.Control
                id="imei"
                name="imei"
                onChange={handleChange}
                placeholder="Enter your IMEI"
                style={{width: '30vw'}}
            />
            <Form.Label>Vendor Code</Form.Label>
            <Form.Control
                id="vendorCode"
                name="vendorCode"
                onChange={handleChange}
                placeholder="Enter your vendor Code"
                style={{width: '30vw'}}
            />
            <Button onClick={setUpAccount} style={{margin:"2vh 0"}}>Submit</Button>
        </form>}

    
      {showForm2 && 
        <form>
            <h3><Form.Label htmlFor="Instrument" style={{color : 'gray', margin:'5vh 0'}}>FYERS Account</Form.Label></h3>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                name="apiKey"
                onChange={handleChange}
                placeholder="Enter your Api Key"
                style={{width: '30vw'}}
            />
            <Form.Label>API Secret</Form.Label>
            <Form.Control
                id="apiSecret"
                name="apiSecret"
                onChange={handleChange}
                placeholder="Enter your Api Secret"
                style={{width: '30vw'}}
            />
            <Button onClick={setUpAccount} style={{margin:"2vh 0"}}>Submit</Button>
        </form>}


      {showForm3 && 
        <form>
            <h3><Form.Label htmlFor="Instrument" style={{color : 'gray', margin:'5vh 0'}}>Angel One Account</Form.Label></h3>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                name="apiKey"
                onChange={handleChange}
                placeholder="Enter your Api Key"
                style={{width: '30vw'}}
            />
            <Form.Label>API Secret</Form.Label>
            <Form.Control
                id="apiSecret"
                name="apiSecret"
                onChange={handleChange}
                placeholder="Enter your Api Secret"
                style={{width: '30vw'}}
            />
            <Button onClick={setUpAccount} style={{margin:"2vh 0"}}>Submit</Button>

        </form>}


      {showForm4 && 
        <form>
            <h3><Form.Label htmlFor="Instrument" style={{color : 'gray', margin:'5vh 0'}}>Zerodha Account</Form.Label></h3>
            <Form.Label>API key</Form.Label>
            <Form.Control
                id="apiKey"
                name="apiKey"
                onChange={handleChange}
                placeholder="Enter your Api Key"
                style={{width: '30vw'}}
            />
            <Form.Label style={{margin:"2vh 0"}}>API Secret</Form.Label>
            <Form.Control
                id="apiSecret"
                name="apiSecret"
                onChange={handleChange}
                placeholder="Enter your Api Secret"
                style={{width: '30vw'}}
            />
            <Button onClick={setUpAccount} style={{margin:"2vh 0"}}>Submit</Button>

        </form>}
    </div>
  );
}

export default TestForm;
