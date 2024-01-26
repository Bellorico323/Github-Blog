import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/repos/Bellorico323/Github-Blog',
})

export const searchApi = axios.create({
  baseURL: "https://api.github.com"
})

//https://api.github.com/search/issues?q=Escolhendo%20angularjs%20repo:Bellorico323/Github-Blog

//https://api.github.com/search/issues?q=repo:Bellorico323/Github-Blog