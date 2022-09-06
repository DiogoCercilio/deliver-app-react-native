import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'
import { ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    useLayoutEffect(() => navigation.setOptions({ headerShown: false }), [])

    const { params: {
        imgUrl, title, rating, genre, address, short_description, dishes, long, lat
    } } = useRoute()

    useEffect(()=> {
        dispatch(setRestaurant({ imgUrl, title, rating, genre, address, short_description, dishes, long, lat }))
    }, [dispatch])

    return (
        <>
            <ScrollView>
                <View className="flex-row h-40 relative bg-gray-400">
                    <View>
                        <Image source={{ uri: imgUrl }} width={10000} height={1000} className="max-w-full max-h-full border-solid" />
                        <TouchableOpacity className="absolute bg-gray-100 top-20 left-4  p-3 rounded-full items-center shadow-sm" onPress={navigation.goBack}>
                            <ArrowLeftIcon size={20} color="#00ccbb" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text> - {genre}
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-500">Nearby - {address}</Text>
                                </Text>
                            </View>
                        </View>

                        <Text className="text-gray-500 mt-2 pb-4">
                            {short_description}
                        </Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                        <Text className="pl-2 flex-1 text-md font-bold">
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color="#00ccbb" />
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>

                    {/* Dishrows */}
                    {(dishes && dishes.length) ? dishes.map(({ id, name, description, price, image }) =>
                        <DishRow key={id} id={id} name={name} description={description} price={price} image={image} />)
                        :
                        <Text className="text-center color-gray-400">No dishes found :(</Text>
                    }
                </View>
            </ScrollView>

            <BasketIcon />
        </>
    )
}

export default RestaurantScreen