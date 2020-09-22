import React, { useState } from 'react'
import { View, Text } from 'react-native';

import styles from './styles'
import {Feather} from '@expo/vector-icons'

import { ScrollView, BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader'

import ProfessionalBox, {ProfessionalsItemsBox} from '../../components/ProfessionalBox'
import api from '../../services/api';

function ProfessionalList(){

    const [professionals, setProfessionals] = useState([]);

    const [area, setArea] = useState('');

    async function searchProfessional(){
        const response = await api.get('users', {
            params: {
                area,
            }
        });

        setFilterVisible(false); 

        setProfessionals(response.data)
    }

    const [filterVisible, setFilterVisible]= useState(false)
    
    function handlePressFilterIcon(){
        setFilterVisible(!filterVisible)
    }

    return(
        <View style={styles.container}>
            <PageHeader
                headerRight={(
                    <BorderlessButton onPress={handlePressFilterIcon}>
                        <Feather name="filter" size={25} color="#fff"/>
                    </BorderlessButton>
                )}

            >
            { filterVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}> Área de atuação </Text>
                    <TextInput
                        value={area}
                        onChangeText={text => setArea(text)}
                        style={styles.input}
                        placeholder="Digite a área"
                        placeholderTextColor="#c1bccc"
                    />

                    <RectButton onPress={searchProfessional} style={styles.btnSubmit}>
                        <Text style={styles.btn}> Filtrar </Text>
                    </RectButton>

                </View>
            )}

            </PageHeader>

            <ScrollView>
                {professionals.map((ProfessionalItems: ProfessionalsItemsBox) => {
                    return( 
                        <ProfessionalBox
                            key={ProfessionalItems.id}
                            professional={ProfessionalItems}
                        />
                    )
                })}
            </ScrollView>
            
        </View>
    )
}

export default ProfessionalList;