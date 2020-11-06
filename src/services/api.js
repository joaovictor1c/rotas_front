import axios from 'axios';

const api = axios.create({
  baseURL: "https://test-rotas.herokuapp.com",
});
export default api;
