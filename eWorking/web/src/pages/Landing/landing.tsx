import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './styles.css'
import {Link} from 'react-router-dom'

import LandingImage from '../../assets/home.JPG'
import lampadaIcon from '../../assets/ideia.svg'

function Landing(){ 

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const total = response.data.total;

            setTotalConnections(total)
        })
    },[])

    
    return (
        <div className="landing-container">
            <div className="landing-body-first">
                <div className="logo-container">
                    <img src={LandingImage} alt="Homem trabalhando" className="landing-page-image"/>
                </div>
                    <div className="landing-body-right">
                        <div className="text-container">
                            <h1> Bem vindo,</h1>
                            <p>Aqui você encontrará profissionais e  <br/>estar visivel para  milhares de empresas!</p>
                        </div>
                        <div className="buttons-container">
                            <button>
                                <Link to="/form" className="btn-profissional">
                                    Sou Profissional
                                </Link>
                            </button>
                            <button>
                                <Link to="/professional-items" className="btn-empresas">
                                    Empresa
                                </Link>
                            </button>
                        </div>
                        <div className="connections">
                            <p> Total de {totalConnections} conexões realizadas </p> 
                            <div className="ideia-icon">
                                <img src={lampadaIcon} alt="Lampada acessa"/>
                            </div>       
                        </div>
                        
                    </div>
            </div>
            
        </div>
    )
}

export default Landing;