import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID d86c11871b9593e84badc435126485fa3084e3cb906678a6bd5be131bfd8ca15'
    }
});
