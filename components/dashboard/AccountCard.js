import React from 'react'
import Button from 'react-bootstrap/Button';
import {accountCardImage} from '../../styles/styles.module.css'
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import setUpAccount from '@/functions/request';
import { getLocalStorage } from '@/functions/dashboardFunctions';
import Router from 'next/router'
import { redText} from '../../styles/styles.module.css'


function AccountCard({name, imageUrl, config}) {
    const[displayForm, setDisplayForm] = useState(false);
    const [failure, setFailure] = useState(false);

    const openForm = () => {
        setDisplayForm(!displayForm);
    }

    const initialValues = {                
        apiKey: '',
        apiSecret: '',
        imei: '',
        vendorCode: ''
        };

    const [values, setValues] = useState(initialValues);  

    const handleChange = (e) => {                
    setValues({
        ...values,                               
        [e.target.name]: e.target.value,          
    });
    };

    const accessToken = getLocalStorage('accessToken');
    const payload = {"api_key" : values.apiKey, "api_secret": values.apiSecret, 
                    "imei" : values.imei, "vendor_code" : values.vendorCode}

    const FormSubmit = async () => {
        console.log(payload);
        console.log(accessToken)
        console.log(name);
        const response = await setUpAccount(accessToken, payload, name.toLowerCase());
        console.log(response);
        if(response === 200){
            Router.push(
                { pathname: "/broker-login", query: { success: "success" } },
                "/broker-login"
              );
        }else{
            setFailure(true);
        }
    }

    useEffect(() => {
        if (failure) {
          setTimeout(() => {
            setFailure(false);
          }, 5000);
        }
      }, [failure]);

  return (
    <div>

        <div style={{justifyContent:'center', textAlign:'center', width:'100%', marginBottom:'3vh'}}>
            {failure ? <h2 className={redText}>Account Linking failed</h2> : null}
        </div>

        <div style={{textAlign:'center', backgroundColor:'#efeeee', borderRadius:'5px', padding:'4vh 6vh', width:'20vw'}}>
            <img src={imageUrl} className={accountCardImage}/>
            <h3 style={{margin : '2vh 0'}}>{name}</h3>
            <Button as="input" onClick={openForm} type="button" value="Setup" />
        </div>

        {displayForm ? 
            <div>
                {config.map((item, index) => (
                <div style={{margin:'2vh 0'}} key={index}>
                    <Form.Label>Enter {item}</Form.Label>
                    <Form.Control
                    key={index}
                    id={item}
                    name={item}
                    onChange={handleChange}
                    placeholder='Enter your value'
                    style={{width: '15vw'}}
                    />
                </div>
        ))}
            <Button onClick={FormSubmit} style={{margin:"2vh 0"}}>Submit</Button>
            </div>
             : null}
    </div>
  )
}

export default AccountCard