import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import 'intl';
import 'intl/locale-data/jsonp/en';

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    }
]

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const timeTravelInformation = useSelector(selectTravelTimeInformation);
    const SURGE_CHARGE_RATE = 1.5;

    return (
        <SafeAreaView style={tw`bg-white flex-grow `}>
            <View>
                <TouchableOpacity 
                    containerStyle={tw`absolute p-3 z-50 left-5 top-3 rounded-full`}
                    onPress={() => {
                        navigation.navigate('NavigateCard')
                    }}
                    >
                    <Icon
                        name="chevron-left"
                        type="fontawesome"
                        color="black"
                    />
                </TouchableOpacity>
                <Text style={tw`text-center text-xl py-5`}>Select a Ride - {timeTravelInformation?.distance?.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: {id, title, multiplier, image}, item }) => (
                    <TouchableOpacity style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}
                        onPress={() => setSelected(item)}>
                        <Image
                            style={{
                                width: 120,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{uri: image}}
                        />
                        <View>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{timeTravelInformation?.duration?.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'GBP',
                            }).format(
                                (timeTravelInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                    style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`} 
                    disabled={!selected}
                >
                    <Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
