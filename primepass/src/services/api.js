import axios from 'axios'

const token = localStorage.getItem("token")

 const api = axios.create(
    {
        baseURL:"http://localhost:8080",
        timeout:20000,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }
 )
 export default api;