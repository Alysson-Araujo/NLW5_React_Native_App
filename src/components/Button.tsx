import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}



export function Button({title, /* ... rest */}: ButtonProps){
    return(
        <TouchableOpacity
                activeOpacity={0.7}
                style={style.button}
                /* {... rest} */>
                <Text style={style.buttontext}>
                    {title}
                </Text>
            </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        paddingHorizontal: 10
    },
    buttontext: {
        fontSize: 24,
        color: colors.white
    }
});