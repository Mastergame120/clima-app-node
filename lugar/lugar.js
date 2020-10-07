/* Crea una constante para usar Axios */
const axios = require('axios');


const getLugarLatLng = async(dir) => {


    const encodedUlr = encodeURI(dir); /* Captura el valor ingresado por consola */

    /* 
    Muestra la ciudad elejida
    console.log(encodedUlr);
    */

    console.log("Buscando la temperatura actual..");

    /* Se crea la instancia de la peticion de la API */
    const instance = axios.create({
        baseURL: `https://geocode.xyz/+${encodedUlr}+?json=1`,
        headers: { 'X-RapidAPI-Key': '847cc38b21mshde7b93c2f12ec99p17aa71jsn0b6daff10b78' }
    });


    /* Se ejecuta la instancia de la peticion */
    const resp = await instance.get();

    if (resp.data.standard === null) {
        throw new Error(`No hay resultados para ${dir}`);
    }



    /* Se crea contante para usar la respuesta de resp.data.standard */
    const data = resp.data;
    const direccion = resp.data.standard.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}