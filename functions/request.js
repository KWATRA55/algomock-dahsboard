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