import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator();

import Landing from '../pages/Landing'
import CreateUsers from '../pages/CreateUsers'
import Professionals from '../pages/ProfessionalList'

function StackNavigation(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="CreateUsers" component={CreateUsers}/>
                <Screen name="Professionals" component={Professionals}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;