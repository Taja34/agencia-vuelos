import axios from "axios"

const URL_API = 'http://localhost:3004'
export const setasientos = async (pasajero,id) => {
    let pas = {informacion:pasajero,idVuelo:id}
    try {
         await axios.post(`${URL_API}/pasajeros`,pas)
       
    } catch (error) {
        return error
    }
}
export const asientosocupados  = async (info,id) => {
   
    console.log(info)
    console.log(id)
    let dsa = await info
   
  info.map((element, index)=>{
    if(element.itinerario.precio> 10000){
        element.itinerario.precio = 100000
    }
})
    
    
    try {
         await axios.put(`${URL_API}/vuelos/${id}`,info[0])

   }       
     catch (error) {
        return error
    }
}
