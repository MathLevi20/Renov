import axios, { AxiosInstance } from 'axios';

export const API_URL = 'https://ersbackend-alfa.onrender.com';
export const BASE_URL = 'https://ersbackend-alfa.onrender.com';

interface ApiResponse<T> {
    data: T;
}


export const API = axios.create({
    baseURL: API_URL
})


// Defina a constante BASE_URL com o valor da sua base URL

// Criação da instância do axios


// Função para obter o token do localStorage
export const getTokenFromLocalStorage = (): string | null => {
    try {
        const storedUserData = localStorage.getItem('@user');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData) {
                console.log(userData.token)

                return String(userData.token);
            }
        }
    } catch (error) {
        console.error('Erro ao processar os dados do localStorage:', error);
    }
    return null;
};

// Interceptador para adicionar o token ao cabeçalho Authorization das requisições



async function fetchData<T>(endpoint: string, method = 'GET', body?: any): Promise<T> {
    const url = `${BASE_URL}/${endpoint}`;

    try {
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : undefined,
        };

        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const data: ApiResponse<T> = await res.json();
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { fetchData };

