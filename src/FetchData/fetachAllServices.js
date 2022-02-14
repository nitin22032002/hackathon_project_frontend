// const ServerURL = 'https://prodevtransportservices.herokuapp.com'
const ServerURL = 'http://localhost:7000'
const fetchStateorCity=async(url,body)=>{
    try{
        const response = await fetch(`${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify(body),
          });
          
        const result = await response.json();
        return result;

    }catch(e) {
        console.log("Error:",e)
        return null
    }
}

const postData=async(url,body)=>{
    try{ 
        
        const response = await fetch(`${ServerURL}/${url}`, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(body),
          });
          
              const result = await response.json();
            //   alert(result)
              return result;
          
    }catch(e)
    {
        console.log("Error:",e)
        return null 
    }
}

const getData = async(url)=>{
    try
    {
        // `${ServerURL}/${url}` This technique is known as template literals
        const response = await fetch(`${ServerURL}/${url}`,{ headers: { "Content-Type": "application/json;charset=utf-8",token:localStorage.getItem('TOKEN') },})
        
            const result = await response.json();
            return result;
        

    }catch(e)
    {
        console.log("Error:",e)
        return null 
    }
}


export {fetchStateorCity, postData, getData}