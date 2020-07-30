import axios from 'axios'

export const coreAPI = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3001/`,
})
