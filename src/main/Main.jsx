import React from 'react'
import './Main.scss'
import Form from './form/Form'
import TarjetaD from '../icons/TarjetaD.png'
import TarjetaE from '../icons/TarjetaE.png'
const Main = () => {


  return (
    <main>
    <Form />
    <div className='main'> <img
    src='https://img.freepik.com/foto-gratis/ala-avion-volando-encima-nubes_1232-1561.jpg?w=2000' className='main__backgraund'/></div>
    
    <aside className='cont'><article className='cont__title'> <p> <b>Pago seguro </b></p></article>
    <article className='cont__recuadro'>
      <div className='cont__recuadro__Pdiv'>
        <p>Tarjeta de credito,tarjeta de ddebito y pago electronico</p>
        <div>
          <img
          src={TarjetaD} className='cont__recuadro__Pdiv__img'/>
        </div>
        
      </div>
      <div className='cont__recuadro__Sdiv'>
        <p> Efectivo en cualquiera de las sucursales participantes</p>
<img src={TarjetaE} className='cont__recuadro__Sdiv__img'/>
      </div>
    </article></aside>
    
    </main>

  )
}

export default Main