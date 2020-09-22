import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: "black",
       padding: 0,
    },

    imageHome: {
        width: '88%',
        resizeMode: 'contain',
        marginTop: 60,
        marginLeft: 28,
    },

    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 0,
    },

    subtitle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 0,
    },

    buttonsContainer:{
        marginTop: 50,
        flexDirection: 'row',
    },

    buttonTextPrimary: {
        color: 'white',
        marginTop: -10,
        marginLeft: 8,
    },

    buttonTextSecondary: {
        color: 'white',
        marginTop: -10,
        marginLeft: 16,
    },

    button: {
        fontFamily: 'Poppins_400Regular',
        height: 50,
        width: '40%',
        borderRadius: 8,
        padding: 24,
        marginLeft: 28,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#008B8B',
        
    },

    buttonSecondary: {
        backgroundColor: '#4F4F4F',
        marginLeft: 12,
    },

    totalConnections: {
        marginTop: 55,
        marginLeft: 76,
        color: 'white',
    }
})

export default styles;