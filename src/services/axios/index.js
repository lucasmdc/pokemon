import axios from "axios"

const _api =  axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Cache-Control': 'no-cache'
    }
})

export default _api