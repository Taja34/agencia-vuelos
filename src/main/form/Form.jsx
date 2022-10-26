import React, { useEffect, useState } from 'react'
import calendary from '../../icons/calendar.svg'
import chevron from '../../icons/chevron-down.svg'
import avion from '../../icons/plane.svg'



import cancel from '../../icons/x.svg'
import lupa from '../../icons/search.svg'

import { DateTime } from 'luxon'
import { Navigate, useNavigate } from 'react-router-dom'
import { redirectUser } from '../../session'



const Form =  ({ vuelos }) => {

  useEffect(() => {
    //redirect if not session
   
}, [])
 let dt = DateTime.now();
 let horaExacta = dt.toISODate()
  console.log(dt)
  console.log( dt.toLocaleString(DateTime.DATE_HUGE))
  const month = DateTime.fromISO(dt).toFormat('LLL');
    console.log(month);
 let numero =  dt.daysInMonth
 console.log(numero)
 let tipoViaje = true
  const handleChange = (numero) => {
if(numero === 2){
    let backgraund = document.getElementById('backgraund');
    let inputDestino = document.getElementById('InputDestino')
    backgraund.classList.remove('hidden')
    inputDestino.classList.remove('hidden')
}else if(numero ===1){
  let backgraund = document.getElementById('backgraund');
    let InputOrigen = document.getElementById('InputOrigen');
    backgraund.classList.remove('hidden');
    InputOrigen.classList.remove('hidden')
}else if(numero===3){
  let backgraund = document.getElementById('backgraund');
  let InputSalida = document.getElementById('InputSalida');
  backgraund.classList.remove('hidden');
  InputSalida.classList.remove('hidden')
}
  }
  const click = ({target}) =>{
if(target.id==='redondo'){
  let redondo = document.getElementById('redondo')
  let sencillo = document.getElementById('sencillo')
  redondo.classList.add('color')
  sencillo.classList.remove('color')
  let regreso = document.getElementById('regreso')
  regreso.classList.remove('hidden')
  tipoViaje = false
}
if(target.id==='sencillo'){
  let regreso = document.getElementById('regreso')
  regreso.classList.add('hidden')
  let redondo = document.getElementById('redondo')
  let sencillo = document.getElementById('sencillo')
  redondo.classList.remove('color')
  sencillo.classList.add('color')
  tipoViaje = true
}
  }
  const handleChange2 = () => {
    let backgraund = document.getElementById('backgraund');
    let inputDestino = document.getElementById('InputDestino')
    let InputSalida = document.getElementById('InputSalida');
    let InputOrigen = document.getElementById('InputOrigen')
    backgraund.classList.add('hidden')
    inputDestino.classList.add('hidden')
    InputOrigen.classList.add('hidden')
    InputSalida.classList.add('hidden')

  }
   const  [dataForm, setDataForm] = useState ({
   
   Origen:"---",
   Destino:"---",
    Salida:"---",
   Regreso:"---",
      Pasajeros:0

  });
const InfoFormu = () =>{
  sessionStorage.setItem('user', JSON.stringify(dataForm))

}
  const valor = (element,numero) => {
   if(numero ===1){
    let response = element;
    console.log('destino'+response)
    
   setDataForm({
        ...dataForm,
        ['Destino']: element
      })
    }
    if(numero ===2){
      let response = element;
      console.log('Origen'+response)
      setDataForm({
          ...dataForm,
          ['Origen']: element
        })
    console.log(dataForm)
      } if(numero ===3){
       let response =  element
        console.log('Salida'+response)
        setDataForm({
            ...dataForm,
            ['Salida']: element
          })
      console.log(dataForm)
        }
    }
    const handleChangeInput = ({target}) => {
      console.log(target)
      setDataForm({
          ...dataForm,
          [target.name]: target.value
      })
  console.log(dataForm)
}

  return (
    <>
    
      <div className='InputDestino hidden' id='InputDestino'>
        <div className='InputDestino__title'><b>¿A donde viajas? </b> <img src={cancel} onClick={handleChange2} />
        </div>
        <div className='InputDestino__input'>
          <img src={lupa} /> <input type='serach' className='inputBusqueda' />
        </div>
        <ul>
          {
            vuelos.map((element, index) => (
              <li key={index} className='InputDestino__list' id={element.itinerario.destino} onClick={async () => {
                let funcion1 =await valor(element.itinerario.destino,1);
                let funcion2 = handleChange2; funcion2()
              }
              }> {element.itinerario.destino} </li>
            ))
          }
        </ul>


      </div>
      <div className='InputDestino hidden' id='InputOrigen'>
        <div className='InputDestino__title'><b>¿Desde donde viajas? </b> <img src={cancel} onClick={handleChange2} />
        </div>
        <div className='InputDestino__input'>
          <img src={lupa} /> <input type='serach' className='inputBusqueda' />
        </div>
        <ul>
          {
            vuelos.map((element, index) => (
              <li key={index} className='InputDestino__list' id={element.itinerario.origen} onClick={async () => {
                let funcion1 =  valor(element.itinerario.origen,2);
                let funcion2 = handleChange2; await funcion2()
              }
              }> {element.itinerario.origen} </li>
            ))
          }
        </ul>


      </div>



      <div className='form'>

        <p className='form__title'>
          Busca un nuevo destino y comienza la aventura. </p>
        <p className='form__text'>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>

        <div className='form__input__viaje'>
          <p className='form__input__viaje__Redondo' id='redondo' onClick={click}>Viaje redondo</p>
          <p className='form__input__viaje__Sencillo color' id='sencillo' onClick={click}>Viaje sencillo </p></div>
        <aside className='form__cont__inputs'>

          <div className='form__cont__inputs__origen' onClick={()=>{handleChange(1)}} > <p className='form__cont__inputs__origen__title' > {dataForm.Origen}</p>
            <p className='form__cont__inputs__origen__text'>Origen</p></div>
          <div className='form__cont__inputs__origen' onClick={()=>{handleChange(2)}}> <p className='form__cont__inputs__origen__title'>{dataForm.Destino}</p>
            <p className='form__cont__inputs__origen__text'>Seleccione un destino</p></div>

          <div className='form__cont__inputs__fecha'>
         <label>Salida</label>
          <input
            onChange={handleChangeInput}
            type="date"
            name="Salida"
            className="main_form_control"
            aria-label="Fecha"
            aria-describedby="date"
            min={horaExacta}
            
            
          />

          </div>
          <div className='form__cont__inputs__fecha hidden' id='regreso'>
          <input
            onChange={handleChangeInput}
            type="date"
            name="Regreso"
            className="main_form_control"
            aria-label="Fecha"
            aria-describedby="date"
            min={horaExacta}
            
           
          />

          </div>
          <div className='form__cont__inputs__pasajeros'>
            <div>
              <p className='form__cont__inputs__fecha__salida'>Pasajeros</p>
             <select name ="Pasajeros" onChange={handleChangeInput}>
              <option  >
                1 Adultos
              </option>
              <option>
                2 Adultos
              </option>
             </select>
            </div>
            <img src={chevron} className="form__cont__inputs__fecha__fecha__img" />
          </div>
          <div className='form__cont__inputs__pasajeros'>
            <div>
              <p className='form__cont__inputs__fecha__salida'>¿Tienes un codigo de promocion?</p>
              <p className='form__cont__inputs__fecha__fecha'>-- -- -- -- </p>
            </div>

          </div>
          <div className='form__button' onClick={InfoFormu}>

            <img
              src={avion} className='form__button__img' />
            <p>Buscar vuelos</p>
          </div>

        </aside>




      </div>
    </>
  )
}

export default Form