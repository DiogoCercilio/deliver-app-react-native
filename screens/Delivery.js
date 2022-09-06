import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { XIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress';
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

    return (
        <View className="bg-[#00ccbb] flex-1 min-h-40">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">
                        Order Help
                    </Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-2xl font-bold">45-55 minutes</Text>
                        </View>

                        <Image source={require('../assets/giphy.gif')} className="h-100 w-100" width={140} height={80} />
                    </View>

                    <Progress.Bar progress={0.3} width={150} indeterminate={true} color="#00ccbb" />

                    <Text className="mt-3 text-gray-500">
                        Ypur order at <Text className="font-bold text-gray-700">{restaurant.title}</Text> is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                className="flex-1 mt-40 z-0 max-h-fit"
                style={styles.map}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,    
                        zoom: 2
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00ccbb"
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28 absolute w-full bottom-0">
                <Image 
                    source={{
                        uri: 'https://i.pravatar.cc/50'
                    }}
                    width={50}
                    height={50}
                    className="w-20 h-20 bg-gray-400 shadow-xl p-4 rounded-full ml-5 bg-cover"
                />
                <View className="flex-1">
                    <Text className="text-lg">
                        John Doe
                    </Text>
                    <Text className="text-gray-400">
                        Your Rider
                    </Text>
                </View>

                <Text className="text-[#00ccbb] text-lg mr-5 font-bold"> Call</Text>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default DeliveryScreen
