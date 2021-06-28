import React from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atrás'
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina2Screen</Text> 

            <Button 
                title="Ir a página 3"
                onPress={ () => navigator.navigate('Pagina3Screen') }
            />            
        </View>
    )
}
