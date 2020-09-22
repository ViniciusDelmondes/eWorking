import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 0,
    },

    createUserImage: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -20,
    },

    title: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 25,
        marginLeft: 50,
        marginTop: -28,
    },

    description: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        marginLeft: 40,
    },

    okButton: {
        width: 300,
        marginLeft: 30,
        marginTop: 80,
        backgroundColor: '#008B8B',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    btnText: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        fontWeight: "700",
    }
});

export default styles;