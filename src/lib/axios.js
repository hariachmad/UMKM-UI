import axios from "axios";

const axiosinstance = axios.create(
    {baseURL:"http://127.0.0.1:8000/api"}
);
const setBearerToken=(token)=>{axiosinstance.defaults.headers.common['Authorization']='Bearer ${token}'};

export default axiosinstance