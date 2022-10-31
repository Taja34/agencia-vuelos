import React, { useContext, useEffect, useState } from 'react'
import avion from '../../icons/plane.svg'
import { DateTime } from 'luxon'
import { getVuelos } from '../../service/vuelos'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../routes/routes';
import chevron from '../../icons/chevron-down.svg'




const Form =  () => {
  const navigate = useNavigate();
  let tipoViaje = false
  const{showTitle2,setShowTitle2} = useContext(AppContext)
  useEffect(() => {
     
    dataVuelo()
  }, [])

  const dataVuelo = async ()=>{
   let response = await getVuelos()

const [dataSends] = await Promise.all([
  getVuelos()])
  setOrigen(dataSends)
  setDestino(dataSends)
  }

 
 let dt = DateTime.now();
 let horaExacta = dt.toISODate()
   const  [dataForm, setDataForm] = useState ({
   
   Origen:"---",
   Destino:"---",
    Salida:"---",
   Regreso:"---",
   adultos:0,
   bebes:0,
   niños:0

  });
  const [count, setcount] = useState(1)
  const [countN, setcountN] = useState(1)
  const [countB, setcountB] = useState(1)
  const  [origen, setOrigen] = useState ([])
  const  [destino, setDestino] = useState ([])
  const [showTitle, setShowTitle] = useState(false);
const InfoFormu = () =>{
  sessionStorage.setItem('user', JSON.stringify(dataForm))
  navigate('vuelos');
}


  

    const handleChangeInput = ({target}) => {
      console.log(target)
      setDataForm({
          ...dataForm,
          [target.name]: target.value
      })}
      const handleChangeInputPasajeros =  ({target}) => {
       if(target.id ==='adultos'){
        setcount( count+1)
       
  setDataForm(
    {
      ...dataForm,
      [target.id]:count

    }
  )
       }else if(target.id ==='niños'){
        setcountN( countN+1)
       

  setDataForm(
    {
      ...dataForm,
      [target.id]:countN

    }
  )
       }else if(target.id ==='bebes'){
        setcountB( countB+1)
  setDataForm(
    {
      ...dataForm,
      [target.id]:countB

    }
  )
       }
      
      
}

let color =true

const desplegable=()=>{
  setShowTitle(!showTitle);
}
const desplegable2=()=>{
  setShowTitle2(!showTitle2);
}




  return (
    <>
    
     



      <div className='form'>
        <p className='form__title'>
          Busca un nuevo destino y comienza la aventura. </p>
        <p className='form__text'>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
        <div className='form__input__viaje'>
          <p className={`form__input__viaje__Redondo ${showTitle2 && 'color'}`}  id='redondo' onClick={desplegable2} >Viaje redondo</p>
          <p className={`form__input__viaje__Sencillo ${!showTitle2&& 'color'}`} id='sencillo' onClick={desplegable2} >Viaje sencillo </p></div>
        <form className='form__cont__inputs'>
          <select className='form__cont__inputs__origen' onChange={handleChangeInput} name='Destino'>
          <option disabled selected>Destino</option>
       
          {
              origen.map((user, index) => {
               
                return(
                <option key={index} className='form__cont__inputs__origen__title'>{user.itinerario.origen}</option>
              )})
            }
            
          
         
            </select>

          <select className='form__cont__inputs__origen' onChange={handleChangeInput} name='Origen' > 
          <option disabled selected>Origen</option>  {
              origen.map((user, index) => (
                <option key={index} className='form__cont__inputs__origen__title'>{user.itinerario.destino}</option>
              ))
            }</select>
          <div className='form__cont__inputs__fecha'>
         <label>Salida</label>
          <input
            onChange={handleChangeInput}
            type="date"
            name="Salida"
            className="form__cont__inputs__fecha"
            aria-label="Fecha"
            aria-describedby="date"
            min={horaExacta}
            
            
          />

          </div>
          {showTitle2 && <div className={`form__cont__inputs__fecha`} id='regreso' >
 
        <label>Regreso</label>
     <input
            onChange={handleChangeInput}
            type="date"
            name="Regreso"
            className="form__cont__inputs__fecha"
            aria-label="Fecha"
            aria-describedby="date"
            min={horaExacta}
          /> 
          </div>}
          <div className='form__cont__inputs__pasajeros' >
            <div>
              <p className='form__cont__inputs__fecha__salida'>Pasajeros</p><p><img src={chevron} onClick={desplegable} /></p>
              <div className={`InputPasajeros`}>
                {showTitle && <> <div> 
                <p>Adultos</p>
                <div className='count'><div onClick={handleChangeInputPasajeros} id='adultos'>+</div><span>{dataForm.adultos}</span><div>-</div> </div>
                </div>
                
                <p className='count__title'>Niños</p>
                <div className='count'><div onClick={handleChangeInputPasajeros} id='niños'>+</div><span>{dataForm.niños}</span><div>-</div> </div>
                
                <p>Bebes</p>
                <div className='count'><div onClick={handleChangeInputPasajeros} id='bebes'>+</div><span>{dataForm.bebes}</span><div>-</div> 
               </div>
                
               
                
                </> }
            </div>
            </div>
         
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

        </form>




      </div>
    </>
  )
}

export default Form