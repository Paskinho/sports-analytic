import axios from "axios";


// export const instance = axios.create ({
//     baseURL: 'https://back-for-sport-default-rtdb.firebaseio.com/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': ""
//     }
//
// })


const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api-football-v1.p.rapidapi.com/v3/')

export const instance = axios.create({
    method: 'GET',
    baseURL: 'https://api-football-v1.p.rapidapi.com/v3/',
    withCredentials: true,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'x-rapidapi-key': '9632728134msh4ac72251815e590p17fa26jsn8e7d8d692b1b',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
});


// try {
//     const response = await axios.request(instance);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }