import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import brifcase from '../../icons/briefcase.svg'
import { AppContext } from '../../routes/routes';
import { getVuelosBuscados, getVuelosBuscadosFiltrados } from '../../service/vuelos';


const VueloRegreso = () => {
  const{settheme2, theme2} = useContext(AppContext)
  const{settheme, theme} = useContext(AppContext)
  const{showTitle2, setShowTitle2} = useContext(AppContext)


  const user2 = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();
  const back = () =>{
  navigate('/')
  sessionStorage.clear()
  }
  
  useEffect(() => {
   searchVuelos();
    console.log(vuelos)
   

  }, [])
  let initialstate =[]
  let initialstate2 =[]
  

  const  [vuelos, setVuelos] = useState (initialstate)
  const  [vuelos2, setVuelos2] = useState (initialstate2)
  const [boleano, setBoleano] = useState(false)
  
  
  const searchVuelos = async() =>{
    const [dataSends,dataSends2] = await Promise.all([
      getVuelosBuscados(user2.Destino),
      getVuelosBuscados(user2.Origen),
      
    ]);
    setVuelos(dataSends)
    setVuelos2(dataSends[0].itinerario.precio)
   

    

  
      }
      


const equipaje =({target})=>{
  let userE ={...user2,
    equipaje:target.id
  }
  console.log(userE)
  let v = Number(target.id)
  console.log(userE)
  let dsa = vuelos
  let precio = vuelos[0].itinerario.precio 
  vuelos[0].itinerario.precio = vuelos2 + v
   setVuelos(dsa)
   console.log(vuelos)
   console.log(vuelos2)
  sessionStorage.setItem('user2', JSON.stringify(userE))
setBoleano(true)

}
const redireccion =()=>{

  settheme2(vuelos)
 
  console.log(theme2)
  navigate('/asientos')
}
  return (
    <>
    <div className='contVuelos'>
   <div className='contVuelos__vuelos'>
   <div className='contVuelos__vuelos__header'>
      <div className='form__title'>Vuelo de Regreso</div>
      <div className='contVuelos__vuelos__header__btn' onClick={back}>Cambiar vuelo </div>
      </div>      
      <aside>
      
        {
         
         vuelos.map((element, index)=>(
          <article className={`contVuelos__vuelos__cont hola${index}`}  id={element.id}>
          <p className='contVuelos__vuelos__cont__time' key={index} id={element.id} >{element.timeVuelo}</p>
          <div className='contVuelos__vuelos__cont__timefly'  id={element.id}>
            <p id={element.id}>{element.itinerario.duracion}</p>
            <div className='rayita'></div>
            <p id={element.id}>{element.itinerario.scales}</p>
          </div>
          <p className='contVuelos__vuelos__cont__time' id={element.id} >{element.llegada}</p>
          <div className='contVuelos__vuelos__cont__equipaje' onClick={equipaje} id='20000'><img src={brifcase}/>
          <p>1 objeto presonal</p>
          <p>$20.000</p></div>
          <div className='contVuelos__vuelos__cont__equipaje' onClick={equipaje} id='40000'><img src={brifcase}/>
          <p>Equipaje de mano</p>
          <p>$40.000</p></div>
          <div className='contVuelos__vuelos__cont__equipaje' onClick={equipaje} id= '80000' ><img src={brifcase}/>
          <p>Equipaje 25kg</p>
          <p>$80.000</p></div>
        </article>
         ))
        }
        
      </aside>
      
      
      
      
      
      
      </div>
      <div className='contVuelos__reservacion'> 
      <p className='contVuelos__reservacion__title'>Tu reservacion</p>
      <div className='contVuelos__reservacion__infoVuelo'>
      <div className='contVuelos__reservacion__infoVuelo__pasajeros'>
      <p>Pasajeros</p>
      <div >
        <p>{user2.adultos} Adultos</p>
        <p>{user2.niños} Niños</p>
        <p>{user2.bebes} Bebes</p>
      </div>
      </div>
       { 
      vuelos.map((element, index)=>{
return(
  <>
        <p className='contVuelos__vuelos__text'>Vuelo de salida</p>
        <div className='contMede'>
        <div className='mede'>
          <p className='mede__title'>{vuelos[0].itinerario.origen}</p>
          <p className='contVuelos__vuelos__text'>{vuelos[0].timeVuelo}</p>
          </div>
          <div className='rayita'>
        </div>
        <div><p className='mede__title'>{vuelos[0].itinerario.destino}</p> <p className='contVuelos__vuelos__text'>{vuelos[0].llegada}</p></div>
        </div>
        <p className='mede__fecha'>{vuelos[0].dia} {vuelos[0].dateVuelo}</p>
     
        </>
)})}
</div>
      <div className='contVuelos__reservacion__costoVuelo'>
        <p className='contVuelos__reservacion__title'>Costo de vuelo</p>
        
        {
          vuelos.map((element, index)=>{
return(
<>
  <div className='contVuelos__reservacion__infoVuelo'>
        <div className='alado'><p>Tarifa base</p> <p>{element.itinerario.precio}</p></div>
        <div className='alado'><p> Descuento Promocional</p> <p>0</p></div>
        <div className='alado'><p>Tarifa base con descuento</p> <p>0</p></div>
        <div className='alado'><p>IVA Tarifa</p> <p>0</p></div>
        
        <div className='alado total'><p>Total</p>
        
        <p>{element.itinerario.precio}</p>
        </div>
        </div>
        { 
          boleano && <div onClick={redireccion} className='paypal'>Seleccionar asientos</div>
        }
        
</>
)

          }
            
            )
        }
       
      </div>
      </div>
     </div>
      </>
  )
}

export default VueloRegreso