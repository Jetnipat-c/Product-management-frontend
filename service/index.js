import axios from 'axios'
import { API } from './api'

export const service = async (payload) => {
    try {
        const result = await axios.request({
            headers: {
                Authorization: `Bearer ${payload.token}`,
                'Content-Type': payload.contentType
            },
            url: `${API}${payload.url}`,
            method: payload.method,
            data: payload.data
        })
        return result
    }
    catch (error) {
        return { error: error.response }
    }
}