import axios from 'axios'
import React from 'react'

const URL_API = 'http://localhost:3004';
export const getVuelos = async () => {
    try {
        const {data} = await axios.get(`${URL_API}/vuelos`)
        return data;
    } catch (error) {
        return []
    }
}


export const getVuelosBuscados = async (destino) => {
    try {
        const {data} = await axios.get(`${URL_API}/vuelos?itinerario.destino=${destino}`)
        return data;
    } catch (error) {
        return []
    }
}
export const getVuelosBuscadosFiltrados = async (destino) => {
    try {
        const {data} = await axios.get(`${URL_API}/vuelos?itinerario.destino=${destino}`)

        let filtrado =  [
            ...data
           ]
      
    
        return filtrado;
    } catch (error) {
        return []
    }
}