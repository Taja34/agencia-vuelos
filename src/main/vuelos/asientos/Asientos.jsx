import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../../routes/routes';
import AsientosRegreso from './AsientosRegreso';
import paypal from '../../../icons/paypal.png';


const Asientos = () => {
let asi = {};
  let pago = false
    const{theme,settheme} = useContext(AppContext)
    const{showTitle2, setShowTitle2} = useContext(AppContext)
    const{asientosO,setasientoO } = useContext(AppContext)
    const [dsa, setdsa] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        console.log(theme)
         asi = theme[0].asientos;
         setdsa(asi)
     setasientos(asi)
        console.log(dsa)

    }, [])
    const [asientos, setasientos] = useState([])
    const [asientosElegido, setasientosElegido] = useState(0)
    const [boleano, setboleano] = useState(false)



  const user = JSON.parse(sessionStorage.getItem('user'));
 
  const back = () =>{
  navigate('/')
  sessionStorage.clear()
  }
  

const seleccionAsientos=({target})=>{
  let totalAsientos = user.adultos + user.niños + user.bebes;
  
  if(asientosElegido< totalAsientos){
    console.log(totalAsientos)
    let v = Number(target.id)
    console.log(totalAsientos)
    if(totalAsientos === 1){

    }
    if(totalAsientos > asientosElegido +1){
      
    
theme[0].itinerario.precio = theme[0].itinerario.precio + 100000  }
    let fds = theme.asientos;
   dsa.map((element,index)=>{
    if(element.id===v){
      element.isOcupado=true
    }
   })





 
   setasientosElegido(asientosElegido+1)
   console.log(asientosElegido)
  }if (asientosElegido=== totalAsientos - 1 ){
    console.log('sa')
setboleano(true)
console.log(pago)
  }

  

}


  
const redireccion =()=>{
  navigate('/pago')
let hola = theme

hola[0].asientos = dsa
console.log(hola) 
}
  return (
    <>
    <div className='contVuelos'>
   <div className='contVuelos__vuelos'>
   <div className='contVuelos__vuelos__header'>
      <div className='form__title'>Vuelo de salida</div>
      <div className='contVuelos__vuelos__header__btn' onClick={back}>Cambiar vuelo </div>
      </div>      
      <aside>
        <article>
        
{
  
  theme.map((element, index)=>{

  return(
      
 <> <p  className='contVuelos__vuelos__subtitulo'>{element.dia} {element.dateVuelo}</p>
        <p className='contVuelos__vuelos__text'>{element.itinerario.origen} a {element.itinerario.destino}</p>
        <p className='contVuelos__vuelos__seleccion'>Seleccion de asientos </p> 
        
 
  

        </>
  
      )} )} 
      <table >

  <tr class="default">

    <td>A</td>

    <td>B</td>

    <td>C</td>
    
    <td> </td>

    <td>D</td>

    <td>E</td>

    <td>F</td>

  </tr>
  <tr >

  </tr>

<tr class="default0">
<td id=''></td>
<td id=''></td>
<td id=''></td>
<td>Salida rapida</td>
<td id=''></td>
<td id=''></td>
  </tr>
  </table>
  <aside class="asientosVuelo">
  
      {asientos.map((element, index)=>{
    
        if(element.isOcupado === false){
            return(
                <article className='ocupado' id={`${element.id}`} onClick={seleccionAsientos}></article>  
            )
        }else if(element.isOcupado === true){
            return(
                 <article className='desocupado' id={element.id}></article>
            )
        }else if(element.isOcupado===0){
            return(
            <article className='vacio' id={element.id}>{element.code}</article>

            )      }
      })}
      </aside>

        </article>
     
        
      </aside>
      
      </div>
      
      
      
      {
          theme.map((element, index)=>{
return( <> 
      
      <div className='contVuelos__reservacion'> 
      <p className='contVuelos__reservacion__title'>Tu reservacion</p>
      <div className='contVuelos__reservacion__infoVuelo'>
      <div>
      <p>Pasajeros</p>
      <div>
        <p>{user.adultos} Adultos</p>
        <p>{user.niños} Niños</p>
        <p>{user.bebes} Bebes</p>
      </div>
      </div>
        

        <p>Vuelo de salida</p>
        <div><div>
          <p>{}</p>
          <p>{theme.timeVuelo}</p>
        </div>
        <div><p>{}</p> <p>{theme.llegada}</p></div>
        <p>{theme.dia} {theme.dateVuelo}</p></div>
      </div>
      <div className='contVuelos__reservacion__costoVuelo'>
        <p>Costo de vuelo</p>
    

  <div className='contVuelos__reservacion__infoVuelo'>
        <div><p>Tarifa base</p> <p>{element.itinerario.precio}</p></div>
        <div><p> Descuento Promocional</p> 0<p></p></div>
        <div><p>Tarifa base con descuento</p> <p>0</p></div>
        <div><p>IVA Tarifa</p> <p>0</p></div>
        
        <div><p>Total</p>
        
        <p>{element.itinerario.precio}</p>
        </div>
        </div>
        {!showTitle2&& boleano&&<div className='paypal' onClick={redireccion}>Paga con Paypal <img src={paypal} className='paypalPequeña'/></div>}
        </div>
      </div>
        
</>
)

          }
            
            )
        }
       
      </div>
     {showTitle2&&<AsientosRegreso/>}
      </>
  
  )
}

export default Asientos