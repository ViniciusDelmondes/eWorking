import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing/landing'
import Form from './pages/Form/form'
import ProfessionalList from './pages/ProfessionalList'
import AlertSucess from './pages/AlertSucess'

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/form" component={Form}/>
            <Route path="/professional-items" component={ProfessionalList}/>
            <Route path="/sucess" component={AlertSucess}/>  
        </BrowserRouter>
    )
}

export default Routes;