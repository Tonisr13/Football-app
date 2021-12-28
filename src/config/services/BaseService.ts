import axios from 'axios'

const baseUrl: any = import.meta.env.VITE_BASE_API_URL
const tokenAPI: any = import.meta.env.VITE_API_TOKEN_KEY

export const api = () => axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': tokenAPI
    }   
})