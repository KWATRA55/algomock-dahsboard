const axios = require('axios');

import { baseUrl, url, header } from './apiRoutes';

export async function login(email, password){
    var raw = JSON.stringify({email, password});
    try{

        let res = await axios.post(baseUrl + url['auth.login'], raw, {headers : header});

        console.log(JSON.stringify(res?.data));
        const accessToken = res?.data?.tokens?.access?.token;
        const role = res?.data?.user?.role;
        return res;
    }catch(err){
        if(!err?.response){
            console.log('No server response');
        }else if(err.response?.status === 400){
            console.log('login failed');
        }
    }
}

export async function getUserData(accessToken, userId){
    let res = await axios.get(baseUrl + `/users/${userId}`, {
        headers: {
            Authorization : `Bearer ${accessToken}`
        }
    })
    console.log('getUserData response : ', res);
    return res;
}

export async function logoutUser(refreshToken){
    try{
        let res = await axios.post(baseUrl + url['auth.logout'],
        { "refreshToken" : refreshToken })
        console.log(res);
        return res;
    }catch(err){
        console.log('Error : ', err);
    }
}

export async function getBrokerAccounts(accessToken){
    try{
        let res = await axios.get(baseUrl + url['broker.accounts'],{
            headers: {
                Authorization : `Bearer ${accessToken}`
            }
        })
        console.log('all broker accounts : ', res);
        return res.data;
    }catch(err){
        console.log('Error : ', err);
    }
}

export default async function setUpAccount(accessToken, payload, brokerName){
    try{
        let res = await axios.post(baseUrl + url[`${brokerName}.setupAccount`], payload, {
            headers: {
                Authorization : `Bearer ${accessToken}`,
            }   
        })
        return res.status;
    }catch(err){
        console.log('Error:', err);
    }
}

export async function deleteBrokerAccount(accessToken, broker_name, broker_id){
    try{
        await axios.delete(baseUrl + 'broker/' + broker_name + '/accounts/' + broker_id,
        {   headers: {
                Authorization : `Bearer ${accessToken}`
            }
        })
    }catch(err){
        console.log('Error : ', err);
    }
}


export async function register(name, email, password){
    var raw = JSON.stringify({name, email, password});
    try{

        let res = await axios.post(baseUrl + url['auth.register'], raw, {headers : header});

        console.log(JSON.stringify(res?.data));
        const accessToken = res?.data?.tokens?.access?.token;
        const role = res?.data?.user?.role;
        return res;
    }catch(err){
        if(!err?.response){
            console.log('No server response');
        }else if(err.response?.status === 400){
            console.log('login failed');
        }
    }
}