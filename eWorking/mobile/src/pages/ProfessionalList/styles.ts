import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#DCDCDC', 
    },

    searchForm: {
        marginTop: 16,
    },

    label: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 40,
    },

    btnSubmit: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginLeft: 64,
        marginTop: 30,
        width: 150,
        backgroundColor: '#008B8B',
    },

    btn: {
        color: 'white',
        fontWeight: '700',
        fontFamily: 'Poppins_400Regular',
    }
});

export default styles;