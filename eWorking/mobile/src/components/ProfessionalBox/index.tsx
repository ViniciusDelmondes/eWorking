import React from 'react'
import { View, Image, Text, Linking } from 'react-native';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

import whatsAppIcon from '../../assets/whatsapp.png'
import api from '../../services/api';

export interface ProfessionalsItemsBox{
    id: number,
    name: string,
    avatar: string,
    profissao: string,
    contratacao: string,
    cidade: string,
    uf: string,
    skills: string,
    cost: string,
    whatsapp: string,
    area: string,
}

interface ProfessionalItems{
    professional: ProfessionalsItemsBox
}

const ProfessionalBox: React.FC<ProfessionalItems> = ({professional, children}) => {

    function handleClickToWhatsapp(){
        api.post('connections', {
            user_id: professional.id
        })

        Linking.openURL(`whatsapp://send?phone=${professional.whatsapp}`)
    }


    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image style={styles.imageUser}source={{uri: professional.avatar}}/>
                <View style={styles.profileTitle}>
                    <Text style={styles.name}> {professional.name} </Text>
                    <Text style={styles.subtitle}> {professional.profissao} </Text>
                    <Text> {professional.cidade}, {professional.uf} </Text>
                </View>
            </View>

            <Text style={styles.bio}> {professional.skills} </Text>

            <View style={styles.footer}>
               <Text> Salário: {professional.cost} </Text>
               <Text> Tipo contratação: {professional.contratacao} </Text>

               <RectButton onPress={handleClickToWhatsapp} style={styles.btnContatc}>
                   <Image style={styles.whatsappIcon}source={whatsAppIcon}/>
                   <Text style={styles.btnTextWhatsapp}> WhatsApp </Text>
               </RectButton>
            </View>

        </View>

    )
}

export default ProfessionalBox;