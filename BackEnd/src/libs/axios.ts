import axios from "axios";

const idVideo = 'mxlmQ0mvKXE'

export const api = axios.create({
    baseURL:`https://www.youtube.com/watch?v=${idVideo}`
})