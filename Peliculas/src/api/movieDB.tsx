import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd3d0c5cbf9197d28c8508e63f08a0427',
        language: 'es-ES'
    }
});

export default movieDB;