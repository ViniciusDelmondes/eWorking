import React, { useState, useEffect } from 'react'

import {useNavigation} from '@react-navigation/native'

import {View, Image, Text} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles';

import LandingImg from '../../../src/assets/home.png'
import api from '../../services/api';

function Landing(){

    const navigation = useNavigation();

    function handleNavigateToCreateUsers(){
        navigation.navigate('CreateUsers')
    }

    function handleNavigateToProfessionals(){
        navigation.navigate('Professionals')
    }

    const [totalConnections, setTotalConnections] = useState('')

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data

            setTotalConnections(total);
        })
    }, [])

    return(
        <View style={styles.container}>
            <Image source={LandingImg} style={styles.imageHome}/>
            <Text style={styles.title}> Bem vindo, {'\n'}
                <Text style={styles.subtitle}> 
                    O que iremos realizar hoje? 
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToCreateUsers} style={[styles.button, styles.buttonPrimary]}>
                    <Text style={styles.buttonTextPrimary}> Profissional </Text>
                </RectButton>

                <RectButton onPress={handleNavigateToProfessionals} style={[styles.button, styles.buttonSecondary]}>
                    <Text style={styles.buttonTextSecondary}> Empresa </Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões realizadas! {' '}
            </Text>

        </View>
    )
}

export default Landing;