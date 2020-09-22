import React from 'react'

import {Link} from 'react-router-dom'

import './styles.css'

import imageLogo from '../../assets/logo-image.JPG'

function AlertSucess(){
    return(
        <div className="alert-container">
            <div className="alert-content">
                <div className="alert-text">
                    <h1> Oba! Seu cadastro foi realizado! </h1>
                    <p> O próximo passo é aguardar o contato dos recrutadores!<br/> Fique de olho 
                        em seu WhatsApp e em sua caixa de Email. <br/> Boa sorte! </p>
                    <Link to='/'>
                        <button type="button">
                            Continuar
                        </button>
                    </Link>
                </div>
                <div className="alert-image">
                    <img src={imageLogo} alt=""/>
                </div>
            </div>    
        </div>
    )
}

export default AlertSucess;