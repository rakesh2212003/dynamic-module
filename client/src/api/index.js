import axios from 'axios'

const API = axios.create({ baseURL : "http://localhost:5000" });

export const SIGNUP = (data) => { API.post('/signup', {...data}) }