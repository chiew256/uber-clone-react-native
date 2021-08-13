import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'


const EatsScreen = () => {
    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    )
}

export default EatsScreen;