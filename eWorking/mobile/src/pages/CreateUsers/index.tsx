import React from 'react'
import {Text, View, Image} from 'react-native'

import createUserImg from '../../assets/createUser.png'

import styles from './styles'

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

function CreateUsers(){

    const navigation = useNavigation();

    function handlePressToHome(){
        navigation.navigate('Landing');
    }


    return (
        <View style={styles.container}>
            <Image source={createUserImg} style={styles.createUserImage}/>
            
            <Text style={styles.title}> Vamos lá! </Text>
            <Text style={styles.description}> Para começar a usar o eWorking, {'\n'} você deverá realizar o seu cadastro {'\n'}via web! </Text>   
            
            <RectButton onPress={handlePressToHome} style={styles.okButton}>
                <Text style={styles.btnText}> Entendido! </Text>
            </RectButton>
        </View>
    )
}

export default CreateUsers;