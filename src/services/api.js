import axios from 'axios';

export const key = '92ee25fdcadfcce32cedfd53d4b76a0704091e18';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
});

export default api;