import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({ navigation }: Props ) => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina3Screen</Text>

            <Button 
                title="Volver"
                onPress={ () => navigation.pop() }
            />

            <Button 
                title="Inicio"
                onPress={ () => navigation.popToTop() }
            />           
        </View>
    )
}
