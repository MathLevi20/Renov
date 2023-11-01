export const API_URL = 'https://ersbackend-alfa.onrender.com';
export const BASE_URL = 'https://ersbackend-alfa.onrender.com';

interface ApiResponse<T> {
    data: T;
}

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
