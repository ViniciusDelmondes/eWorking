import React, { useState, FormEvent } from 'react'

import api from '../../services/api'

import {useHistory} from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import './styles.css'

function Form(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [profissao, setProfissao] = useState('');
    const [skills, setSkills] = useState('');
    const [cost, setCost] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [area, setArea] = useState('');
    const [contratacao, setContratacao] = useState('');


    function handleCreateUser(e: FormEvent){
        e.preventDefault();

        api.post('users', {
            name, 
            avatar,
            cidade,
            uf,
            profissao,
            skills,
            cost,
            whatsapp,
            email,
            area,
            contratacao
        }).then(() => {
            history.push('/sucess')
        }).catch(() => {
            alert('Erro no cadastro, por favor preencha os campos necessários!')
        })
    }

    return (
        <div className="form-container">
            <PageHeader
                title="Vamos começar!"
                subtitle="Preencha o formulário abaixo, clique em cadastrar e pronto! Você estará visível para as empresas. Boa Sorte!"
            />
            
            <div className="area-form">
                <form onSubmit={handleCreateUser}>
                    <fieldset>
                        <legend> Seus dados </legend>

                            <Input 
                                label="Nome completo"
                                name="name"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />

                            <Input 
                                label="Avatar"
                                name="avatar"
                                value={avatar}
                                onChange={(e) => {setAvatar(e.target.value)}}
                            />

                            <Input 
                                label="Estado"
                                name="uf"
                                value={uf}
                                onChange={(e) => {setUf(e.target.value)}}
                            />

                            <Input 
                                label="Cidade"
                                name="cidade"
                                value={cidade}
                                onChange={(e) => {setCidade(e.target.value)}}
                            />

                            <Input 
                                label="Profissão"
                                name="profissão"
                                value={profissao}
                                onChange={(e) => {setProfissao(e.target.value)}}
                            />

                            <Textarea
                                label="Biografia/Skills"
                                name="bio"
                                value={skills}
                                onChange={(e) => {setSkills(e.target.value)}}
                            />
                            

                            <Input 
                                label="Salário"
                                name="salario"
                                value={cost}
                                onChange={(e) => {setCost(e.target.value)}}
                            />

                            <Input 
                                label="WhatsApp"
                                name="whatsapp"
                                value={whatsapp}
                                onChange={(e) => {setWhatsapp(e.target.value)}}
                            />

                            <Input 
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />

                            <Select
                                name="area"
                                label="Área de Atuação"
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

                            <Select
                                name="contratacao"
                                label="Tipo Contratação"
                                value={contratacao}
                                onChange={(e) => {setContratacao(e.target.value)}}
                                options={[
                                    {value: 'Consolidação das Leis do Trabalho (CLT)', label: 'Consolidação das Leis do Trabalho (CLT)'},
                                    {value: 'Pessoa Jurídica', label: 'Pessoa Jurídica'},
                                    {value: 'Temporário', label: 'Temporário'},
                                ]}
                            />

                            <button type="submit" className="btn-submit">
                                Cadastrar
                            </button>            

                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Form;