import axios from "axios";


const api= axios.create({
    baseURL: 'https://yt-api.p.rapidapi.com',
    params: {
        geo: 'Uk',
        lang: 'en'
    },
    headers: {
        'X-RapidAPI-Key': '903f85e181msh699b588da79c405p111e0ajsne80db8e842e2',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
})

export default api;