import React,{useState} from 'react';

import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Platform, ColorPropType } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../styles/colors';
import {Button} from '../components/Button';


import wateringImg from '../assets/watering.png';

export function Welcome() {
    /* 
    const [visible, setVisible] = useState(false);
    
    function handleVisibility(){
        useState(true);
    }
     */
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie {'\n'} suas plantas de {'\n'} forma fácil
            </Text>
            <Image source={wateringImg} style={style.image} />
            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.
            </Text>
            <Button title={">"} /> 

        </SafeAreaView>

    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 25 : 0
        // é necessário isso pois estou fazendo no android 
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 60,
        paddingHorizontal: 10
    },
    buttontext: {
        fontSize: 24,
        color: colors.white
    },
    image: {
        width: 292,
        height: 284

    }
});