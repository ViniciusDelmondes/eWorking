import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native';

import {useNavigation} from '@react-navigation/native'

import {BorderlessButton} from 'react-native-gesture-handler';

import backIcon from '../../assets/left-arrow.png'
import logoIcon from '../../assets/logoMini.png'

import styles from './styles'

interface PageHeaderProps{
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ headerRight, children}) => {


    const navigation = useNavigation();

    function handlePressReturnHome(){
        navigation.navigate('Landing')
    }


    return( 
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handlePressReturnHome}>
                    <Image source={backIcon}/>
                </BorderlessButton>
                <Image source={logoIcon} style={styles.logoImg}/>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Profissionais {'\n'}disponíveis
                </Text>
                {headerRight}
            </View>
                {children}
        </View>
    )
}

export default PageHeader;