import React, { useState, FormEvent } from 'react'
import api from '../../services/api'

import './styles.css'

import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import ProfessionalItemBox, {Professional} from '../../components/ProfessionalItemBox'

function ProfessionalList(){

    const [professionals, setProfessionals] = useState([]);

    const [area, setArea] = useState('');

    async function searchProfessionals(e: FormEvent){
        e.preventDefault();

        const response = await api.get('users', {
            params: {
                area, 
            }
        });

        setProfessionals(response.data)
    }

    return (
        <div className="professional-item-container">
            <div className="professional-item-header">
            <PageHeader 
                title="Falta muito pouco!"
                subtitle="Utilize o filtro inserindo a área em que você está procurando para encontrar o profissional  para sua empresa!"
            />
            

                <div className="area-select">
                    <form id="search-professionals" onSubmit={searchProfessionals}>
                        <Select
                            name="area"
                            value={area}
                            onChange={(e) => {setArea(e.target.value)}}
                            options={[
                                {value: 'Administração', label: 'Administração'},
                                {value: 'Beleza e Estética', label: 'Beleza e Estética'},
                                {value: 'Comunicação e Marketing', label: 'Comunicação e Marketing'},
                                {value: 'Comunicação Visual', label: 'Comunicação Visual'},
                                {value: 'Desenvolvimento Social', label: 'Desenvolvimento Social'},
                                {value: 'Direito', label: 'Direito'},
                                {value: 'Educação', label: 'Educação'},
                                {value: 'Engenharia', label: 'Engenharia'},
                                {value: 'Fotografia', label: 'Fotografia'},
                                {value: 'Gastronomia e Alimentação', label: 'Gastronomia e Alimentação'},
                                {value: 'Idiomas', label: 'Idiomas'},
                                {value: 'Meio Ambiente', label: 'Meio Ambiente'},
                                {value: 'Segurança e Saúde no Trabalho', label: 'Segurança e Saúde no Trabalho'},
                                {value: 'Moda', label: 'Moda'},
                                {value: 'Saúde', label: 'Saúde'},
                                {value: 'Tecnologia da Informação', label: 'Tecnologia da Informação'},
                                {value: 'Turismo e Hospitalidade', label: 'Turismo e Hospitalidade'},
                            ]}
                        />

                        <div className="search-button">
                            <button type="submit">
                                Pesquisar
                            </button>
                        </div>

                    </form>
                </div>

         </div>

        <div className="area-profissional-items">

            {professionals.map((professional: Professional) => {
                return <ProfessionalItemBox key={professional.id} professional={professional}/>
            })}

        </div>    
            
    </div>
    )
}

export default ProfessionalList;