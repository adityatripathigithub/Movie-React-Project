import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzkyMmI4NzUxNjdiMTZjMDk4ZmZjMjRjZWJkNjA0NCIsIm5iZiI6MTcyNDU4MDMxNi43MTMwNDMsInN1YiI6IjY2YzhhYzA0ZTMwOTE3YWExMGIzMDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZJOUaqyRgD8XMzkryOJ9dVHfy9rtGu_48ZkjGVuAJ0'
    }
})
