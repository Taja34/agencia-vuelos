import React from 'react'
import Transporte from '../../icons/Transporte.png'
import VuelosHoteles from '../../icons/VuelosHoteles.png'
import Grupos from '../../icons/Grupos.png'
import Hoteles from '../../icons/Hoteles.png'
import Carga from '../../icons/Carga.png'

const Footer = () => {

    return (
        <footer className='footer'>
            <p className='footer__title'>
                <b>Servicios disponibles</b>
            </p>
            <aside className='footer__cont'>
                <article className='footer__cont__card'>
                    <div>
                        <img
                            src={Transporte} className='footer__cont__card__img' />
                        <p className='footer__cont__card__title' ><b>Transporte</b></p>
                        <p >Renta un auto o reserva un shuttle</p>
                    </div>
                </article>
                <article className='footer__cont__card'>
                    <div>
                        <img
                            src={VuelosHoteles} className='footer__cont__card__img' />
                        <p className='footer__cont__card__title'><b>Vuelos + Hoteles</b></p>
                        <p>Encuentra las mejores ofertas para tu viaje </p>
                    </div>
                </article>
                <article className='footer__cont__card'>
                    <div>
                        <img
                            src={Grupos} className='footer__cont__card__img' />
                        <p className='footer__cont__card__title'><b>Grupos</b></p>
                        <p>Obten una cotizacion para grupos de mas de 9 personas</p>
                    </div>
                </article>
                <article className='footer__cont__card'>
                    <div>
                        <img
                            src={Hoteles} className='footer__cont__card__img' />
                        <p className='footer__cont__card__title'><b>Hoteles</b></p>
                        <p>Reserva cualquier habitacion en cualquier parte del mundo</p>
                    </div>
                </article>
                <article className='footer__cont__card'>
                    <div>
                        <img
                            src={Carga} className='footer__cont__card__img' />
                        <p className='footer__cont__card__title'><b>Carga</b></p>
                        <p>Contamos con servicio de carga y mensajeria</p>
                    </div>
                </article>
            </aside></footer>
    )
}

export default Footer