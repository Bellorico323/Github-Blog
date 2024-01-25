import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/repos/Bellorico323/Github-Blog',
})

//https://api.github.com/search/issues?q=repo:Bellorico323/Github-Blog