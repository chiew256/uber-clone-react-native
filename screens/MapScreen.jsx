import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Touchable } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


// components
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';


const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    
    return(
        <View>
            <TouchableOpacity 
                containerStyle={tw`absolute top-16 left-8 z-50`}
                onPress={() => {
                    navigation.navigate('HomeScreen')
                }}
            >
                <Icon 
                    name="menu"
                    style={tw`rounded-full bg-gray-100 p-2 shadow-lg`}
                    size={24}/>
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen;