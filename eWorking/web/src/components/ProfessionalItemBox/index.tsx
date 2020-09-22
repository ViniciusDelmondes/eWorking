import React from 'react'
import api from '../../services/api'

import './styles.css'

import WhatsAppIcon from '../../assets/whatsapp.svg'


export interface Professional{
    id: number;
    avatar: string;
    name: string;
    profissao: string;
    cidade: string;
    uf: string;
    skills: string;
    whatsapp: string;
    email: string;
    cost: string;
    contratacao: string;
}

interface ProfessionalItemBoxProps{
    professional: Professional
}

const ProfessionalItemBox: React.FC<ProfessionalItemBoxProps> = ({professional}) => {

    function CreateNewConnection(){
        api.post('connections', {
            user_id: professional.id,
        })
    }
    
    return(
        <div className="box-container-item"> 
            <div className="box-content-header"> 
                <div>
                    <img src={professional.avatar} alt="" className="image-avatar"/>
                </div>
                    <div className="box-content-informations">
                        <div>
                            <h1> {professional.name} </h1>
                        </div>
                        <div>
                            <h2> {professional.profissao} </h2>
                        </div>
                        <div>
                            <h2>  {professional.cidade} - {professional.uf}  </h2>
                        </div>
                        <div>
                            <p> {professional.skills} </p>
                        </div>
                        <div>
                            <p> {professional.cost} </p>
                        </div>
                        <div>
                            <p> {professional.contratacao} </p>
                        </div>
                    </div>
            </div>
            <footer className="area-content-buttons">
                <a 
                    target="_blank"
                    onClick={CreateNewConnection}
                    href={`https://wa.me/${professional.whatsapp}`}
                >
                    <img src={WhatsAppIcon} alt=""/>
                    Whatsapp     
                </a>
            </footer>
        </div>
    )
}

export default ProfessionalItemBox;