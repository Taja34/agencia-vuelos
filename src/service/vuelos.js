import axios from 'axios'
import React from 'react'

const URL_API = 'https://back-aropuerto.herokuapp.com'
export const getVuelos = async () => {
    try {
        const {data} = await axios.get(`${URL_API}/vuelos`)
        return data;
    } catch (error) {
        return error
    }
}