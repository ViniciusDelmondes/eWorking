import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: 0,
        backgroundColor: '#D3D3D3',
        width: 315,
        height: 380,
        marginLeft: 20,
        borderRadius: 15,
        fontFamily: 'Poppins_400Regular',
    },

    profileHeader: {
        flexDirection: "row",
        marginTop: 13,
    },

    imageUser: {
        position: 'absolute',
        marginLeft: 15,
        width: '18%',
        height: 60,
        borderRadius: 50,
    },

    profileTitle: {
        marginTop: -4,
        marginLeft: 80,
    },

    name: {
        fontSize: 17,
    },

    subtitle: {
        color: '#4F4F4F',
    },

    bio: {
        marginTop: 20,
    },

    footer: {
        marginTop: 20,
    },

    btnContatc: {
        marginTop: 15,
        marginLeft: 150,
        justifyContent: 'center',
        backgroundColor: '#3CB371',
        width: 150,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
    },

    whatsappIcon: {
        marginTop: 8,
        width: 25,
        resizeMode: 'contain',
    },

    btnTextWhatsapp: {
        marginTop: 12,
        color: 'white',
        marginLeft: 8,
    }


});

export default styles;