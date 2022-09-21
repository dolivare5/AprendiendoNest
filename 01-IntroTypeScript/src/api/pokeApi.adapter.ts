import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
    
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        console.log('Fetch')
        return await resp.json();
    }
}

export class PokeApiAdapter implements HttpAdapter {
    private readonly axios = axios;
    async get<T>(url: string): Promise<T> {
        const { data } = await axios.get<T>(url);
        console.log('Axios')
        return data;
    }
    
    async put (url: string, data: any) {
        return this.axios.put(url, data);
    }
    
    async post(url: string, data: any) {
        return this.axios.post(url, data);
    }
    
    async delete(url: string) {
        return this.axios.delete(url);
    }
    
}