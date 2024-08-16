// src/api.ts
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', 
});

export const getRides = async () => {
    return apiClient.get('/rides'); 
};
