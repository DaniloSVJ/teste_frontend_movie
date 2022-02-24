import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//https://api.themoviedb.org/3//movie/popular?language=pt-BR&api_key=d3dad3aaf9fe823e7609d3d2b6745782
export default api;