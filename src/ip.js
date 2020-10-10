
const axios = require("axios");
export default function IP(ip){
   let response;
    let endpoint="http://ip-api.com/json/"+ip;
    (async () => {
         response = await axios({
          url: endpoint,
          method: 'get'
        })
      
        console.log(response);
      })()
    return response;
}

