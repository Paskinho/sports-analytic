import axios from "axios";


// export const instance = axios.create ({
//     baseURL: 'https://back-for-sport-default-rtdb.firebaseio.com/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': ""
//     }
//
// })

export const instance = axios.create ({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v3/',
    withCredentials: true,
    headers: {

        'X-RapidAPI-Key': 'ec2759ef83msh761e98cfcedc1b3p1c651bjsn7313dedeb9af',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
});


try {
    const response = await axios.request(instance);
    console.log(response.data);
} catch (error) {
    console.error(error);
}