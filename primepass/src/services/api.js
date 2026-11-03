import axios from 'axios'

const token = localStorage.getItem("token")

 const api = axios.create(
    {
        baseURL:`${window.location.protocol}//${window.location.hostname}:8080`,
        timeout:10000,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }
 )
 export default api;