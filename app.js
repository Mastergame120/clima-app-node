const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*const axios = require('axios'); */

/* Crea una constante para usar yarsg */
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*
const encodedUrl = encodeURI(argv.direccion)
console.log(encodedUrl);


const instance = axios.create({
    baseURL: `https://geocode.xyz/+${encodedUrl}+?json=1`,
    headers: { 'X-RapidAPI-Key': '847cc38b21mshde7b93c2f12ec99p17aa71jsn0b6daff10b78' }
});


instance.get()
    .then(resp => {
        console.log(resp.data.standard.addresst, resp.data.longt, resp.data.latt);
    })
    .catch(err => {
        console.log('Error!!', err);
    })  
*/

/*
// Consulta el primer servicio que trae las coordenadas de la ciudad
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);
*/

/* 
//Consulta al segundo servicio que trae el clima 
clima.getClima(9.84844, -84.31328)
    .then(console.log)
    .catch(console.log);
*/


/* esta funcion de flecha usa las dos consultas coordenadas y clima para unirlas en solo una */
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura de ${ coords.direccion } es de ${ temp }°.`;
    } catch (e) {
        return `No se pudo determinar la temperatura de ${ coords.direccion }.`;
    }
}

/* Hace el llamado a la funcion de flecha getInfo */
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);