import axios from "axios";

export const globalUpdateInstance = axios.create({
    baseURL : process.env.DAILY_COUNTRY_URL
})