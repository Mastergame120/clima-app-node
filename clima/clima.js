const axios = require('axios');



/* Esta funcion de flecha obtiene la temperatura actual segun las coordenadas de lat y lng */
const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=e5a86c97b10503a7837bac3c82c08a0d&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}