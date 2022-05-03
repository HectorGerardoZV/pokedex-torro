import axios from "axios";

const clientTotal = axios.create({
    baseURL: import.meta.env.VITE_URL_TOTAL
})
const clientSingle = axios.create({
    baseURL: import.meta.env.VITE_URL_SINGLE
})

export {
    clientTotal,
    clientSingle
}