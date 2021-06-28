import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, useWindowDimensions, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator 
            // drawerPosition='right'
            drawerType={ width >= 768 ? "permanent" : "front" }
            drawerContent={ (props) => <MenuInterno { ...props }/>}
        >
            <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
            <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        </Drawer.Navigator>
    );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions> ) =>{

    return (
        <DrawerContentScrollView>

            {/* Avatar */}
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{
                        uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* Opciones menú */}
            <View style={ styles.menuContainer}>
                <TouchableOpacity 
                    style={ styles.menuItemContainer }
                    onPress={ () => navigation.navigate('StackNavigator') }
                >
                    <Text style={ styles.menuItem }>Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.menuItemContainer }
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    <Text style={ styles.menuItem }>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}