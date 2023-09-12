import axios from "axios";


// export const instance = axios.create ({
//     baseURL: 'https://back-for-sport-default-rtdb.firebaseio.com/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': ""
//     }
//
// })

export const instance = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(instance);
    console.log(response.data);
} catch (error) {
    console.error(error);
}