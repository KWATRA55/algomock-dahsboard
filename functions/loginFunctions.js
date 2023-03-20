export async function LoginUser(raw){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      try{
        const res = await fetch("https://stage.algomock.in/v1/auth/login", requestOptions)
        const json = await res.json();
        return json;
      }
      catch(err){
        console.log(err);
      }
}

export async function RegisterUser(raw){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  myHeaders.append("Access-Control-Allow-Headers", "*");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try{
    const res = await fetch("https://stage.algomock.in/v1//auth/register", requestOptions);
    const json = await res.json();
    return json;
  }
  catch(err){
    console.log(err);
  }
}