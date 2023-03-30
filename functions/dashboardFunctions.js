export const GetToken = () => {
  if(typeof window !== 'undefined'){
      const token = sessionStorage.getItem("key");
      return token;
  }
}

export const setLocalStorage = (key, value) => {
localStorage.setItem(key, value);
}

export const clearLocalStorage = () => {
localStorage.clear();
}

export const getLocalStorage = (key) => {
if(typeof window !== 'undefined'){
  return localStorage.getItem(key);
}
}

export const LoginUser = async (raw) => {
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try{
      const res = await fetch("https://stage.algomock.in/v1//auth/login", requestOptions)
      const json = await res.json();
      if(json.code > 202){
        setHasError(true);
        setErrorMessage(json.message);
      }
      console.log(json)
      setData(json);

      setValue(Object.values(json));
    
      console.log(json.tokens.access.token);
      sessionStorage.setItem("key", json.tokens.access.token);
      Router.push(`/dashboard/${json.user.id}`); 
    }
    catch(err){
      setHasError(true);
      console.log(err);
    }
}

// export function getData(userId, token){
//         var myHeaders = new Headers();
//         myHeaders.append("Authorization", `Bearer ${token}`);

//         var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//         };

//         const res = fetch(`https://stage.algomock.in/v1/users/${userId}`, requestOptions)
//         console.log(res.json());
//         if (!res.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         return Object.values(res);
// }