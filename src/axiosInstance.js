import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

axiosInstance.defaults.headers.common['Authorization']='Custom axios intercetor : AUTH_TOKEN';

export default axiosInstance;