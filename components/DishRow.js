import { View, Text, TouchableOpacity } from 'react-native'
import Currency from 'react-currency-formatter'
import React, { useState } from 'react'
import { Image } from 'react-native-svg'
import { MinusCircleIcon, PlusCircleIcon, ReceiptTaxIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWIthId } from '../features/basketSlice'

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState()
    const items = useSelector((state)=> selectBasketItemsWIthId(state, id))
    const dispatch = useDispatch()

    const addItemsToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    const removeItemsFromBasket = () => {
        if (!items.length) return
        dispatch(removeFromBasket({ id }))
    }

    return (
        <>
            <TouchableOpacity className="bg-white border p-4 border-gray-200" onPress={()=> setIsPressed(!isPressed)}>
                <View className="flex-row">
                    <View className="flex-1">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-green-600 mt-2">
                            <Currency quantity={price} currency="BRL" />
                        </Text>
                    </View>
                    <View>
                        {/* <Text>{image}</Text> */}
                        <View className="w-20 h-20 bg-gray-100">
                            <Image
                                style={{
                                    width: 200,
                                    height: 200,
                                    borderWidth: "1px",
                                    borderColor: "#f3f3f4"
                                }}
                                source={{ uri: image }}
                                className="w-full h-20 bg-gray-300 p-4"
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && 
                <View className="flex-row  items-center bg-white px-4">
                    <TouchableOpacity className="bg-white border-0" onPress={removeItemsFromBasket}>
                        <MinusCircleIcon size={30}></MinusCircleIcon>
                    </TouchableOpacity>

                    <Text className="p-2 color-blue-400">
                        {items.length}
                    </Text>

                    <TouchableOpacity className="bg-white border-0" onPress={addItemsToBasket}>
                        <PlusCircleIcon size={30}></PlusCircleIcon>
                    </TouchableOpacity>

                </View>
            }
        </>
    )
}

export default DishRow