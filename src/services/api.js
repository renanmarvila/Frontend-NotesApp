import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://marvnotes-api.herokuapp.com'
})
