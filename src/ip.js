
const axios = require("axios");



export default function IP(ip)
{
  //return axios.get("http://ip-api.com/json/"+ip);

  return axios.get("https://geo.ipify.org/api/v1?apiKey=at_0n0NyG1NxBJU2ANQ0uE15VwOIVSo4&ipAddress="+ip);

  
  
}

