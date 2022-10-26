import React from 'react';
import Footer from './main/footer/Footer';
import './main/Main.scss'
import Main from './main/Main';
import { getVuelos } from './service/vuelos';
let response; 
const App = () => {
  
  const dataVuelo = async()=>{
    response = await getVuelos()
    console.log(response)

  }
dataVuelo()
    return (
        <>
        <div className='backgraund hidden' id='backgraund'></div>
          <Main vuelos={response} /> 
           <Footer />
        
        </>
    )
}

export default App;