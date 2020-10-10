
const axios = require("axios");



export default function IP(ip)
{
  return axios.get("http://ip-api.com/json/"+ip);
  
}

