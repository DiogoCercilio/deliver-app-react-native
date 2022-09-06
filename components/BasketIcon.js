import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const total = useSelector(selectBasketTotal)

    const openBasketModal = ()=> {
        navigation.navigate('Basket')
    }

    if (!items.length) return

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity className="bg-[#00ccbb] mx-5 p-4 rounded flex-row items-center space-x-1">
                <Text className="text-white rounded font-extrabold text-lg bg-[#01a296] py-1 px-2">
                    {items.length}
                </Text>
                
                <Text className="flex-1 text-white font-extrabold text-center text-lg" onPress={openBasketModal}>
                    View Basket
                </Text>
                
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={total} currency="USD" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon