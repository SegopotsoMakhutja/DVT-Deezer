import axios from 'axios';

const { REACT_APP_API_HOST, REACT_APP_PROXY_HOST } = process.env;

const instance = axios.create({
    baseURL: `${REACT_APP_PROXY_HOST}/${REACT_APP_API_HOST}/`,
    proxy: {
        host: 'https://cors-anywhere.herokuapp.com/',
        port: 3000
    }
});

export default instance;