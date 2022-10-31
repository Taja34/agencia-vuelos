import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AppContext } from '../../routes/routes';
import { asientosocupados, setasientos } from '../../service/asientos';

const Pago = () => {
  const navigate = useNavigate();
    const{theme,} = useContext(AppContext)
    const{theme2} = useContext(AppContext)
    const{showTitle2, setShowTitle2} = useContext(AppContext)
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data)
      console.log(data)
      console.log(theme2)
        asientosocupados(theme,theme[0].id);
        setasientos(data,theme[0].id)
        if(!theme2==={}){
          console.log(theme2)
          asientosocupados(theme2,theme2[0].id);
          setasientos(data,theme2[0].id)
        }
        Swal.fire(
          'El tiquete se compro con exito',
          `vuelo ida: ${theme[0].code}
          precio ida:${theme[0].itinerario.precio}${showTitle2 &&`vuelo regreso:${theme2[0].code} precio regreso:${theme2[0].itinerario.precio}`}`,
          'success'
        );
        navigate('/')
        sessionStorage.clear()
        };
        console.log(theme)
    
        
        const ValidatePass = (value) => {
            if (value.length < 8) {
                return"La contraseña debería contener al menos 8 caracteres"
            } else if (value.length > 16) {
                return "La contraseña debe contener menos de 16 de caracteres"
            } else {
                return true;
            }
        }
        const ValidateName = (value) => {
            if (/^[A-Za-z]+$/i.test(value)) {
                return true
            } else {
                return "El nombre ingresado contiene caracteres no permitidos"
            }
        }
  return (
    <>
    <div className='corral'>
    <p><img src='https://www.paypalobjects.com/images/shared/momgram@2x.png'/></p>
    <form onSubmit={handleSubmit(onSubmit)} className='pago'>
      <label>
        
        <input
          type="text"
          placeholder="Escriba su nombre"
          {...register("name", { required: true, validate: ValidateName })}
          className={errors.name ? "input--error" : ""}
        />
              {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label>
        
        <input
          type="number"
          placeholder="Escriba su número telefónico"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span>Este campo es obligatorio</span>}
      </label>
      <label>
        
        <input
          type="number"
          placeholder="Escriba su edad"
          {...register("edad", { required: true  })}
        />
        {errors.edad && <span>{errors.password.message}</span>}
      </label> 
      <label>
       
        <input
          type="password"
          placeholder="Escriba su contraseña"
          {...register("password", { required: true, validate: ValidatePass })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </label>
      <label>
     
        <input
          type="number"
          placeholder="Escriba su cedula"
          {...register("cedula", { required: true})}
        />
        {errors.cedula && <span>{errors.cedula.message}</span>}
      </label>
      <button type="submit">Pagar</button>
    </form>
    </div>
    </>
  )
}

export default Pago