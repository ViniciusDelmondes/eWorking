import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: 'black',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        // Space-between separar para ambos as extremidades
        justifyContent: 'space-between',
    },

    logoImg: {
        width: '30%',
        resizeMode: 'contain'
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
    },

    title: {
        color: 'white',
        fontSize: 20,
        marginTop: 25,
        fontFamily: 'Poppins_400Regular',
    },
})

export default styles;