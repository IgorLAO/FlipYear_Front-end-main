import { useState } from 'react'
import { Link } from 'react-router-dom'

import './recuperar_senha.scss'
import confirmacao from '../../../ui/assets/images/imagesLogin/confirm 4.png'


export function RecupararSenha(props){
  const [hide, setHide] = useState(true)
  const [reveal, setReveal] = useState(false)

  const hideReveal = () =>{
    setHide(false)
    setReveal(true)
  }

  const hideReveal3 = () =>{
    setHide(true)
    setReveal(false)
  }


    return(
      <>
<div className='recuperação'>
  {hide && (<>
    <div className='voltar'>
    <h5 onClick={props.hideReveal2}> --    Voltar </h5>
          </div>

        <h1>Recuperar conta</h1>
        
        <div className='inputsRec'>

        <label htmlFor="email1">
          email de recuperação
        <input type="text" id='email1' />
        </label>

        <label htmlFor="email2">
          digite novamente
        <input type="text"  id='email2'/>
        </label>
        </div>
        
        <div>
    
          <button onClick={hideReveal} >enviar</button>
          </div>
    </>)}
    {reveal && (<>
          <div className='confirm'>
            <img src={confirmacao} /> 
            <h3> Email de recuperação <b>enviado</b>  </h3>
            </div>
    </>)}
          </div>
          
          </>
          )
        }