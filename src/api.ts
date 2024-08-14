// src/api.ts
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api', // L'URL de ton backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRides = async () => {
    return apiClient.get('/rides');
};
