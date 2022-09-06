import { View, Text, TouchableOpacity } from 'react-native'
import Currency from 'react-currency-formatter'
import React, { useState } from 'react'
import { Image } from 'react-native'
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
        if (!items?.length) return
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
                            <Currency quantity={price} currency="USD" />
                        </Text>
                    </View>
                    <View>
                        {/* <Text>{image}</Text> */}
                        <View className="bg-gray-100">
                            <Image
                                width={75}
                                height={75}
                                style={{
                                    borderWidth: "1px",
                                    borderColor: "#f3f3f4"
                                }}
                                source={{ uri: image }}
                                className="max-w-full bg-gray-300 p-4"
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && 
                <View className="flex-row  items-center bg-white px-4">
                    <TouchableOpacity className="bg-white border-0" onPress={removeItemsFromBasket}>
                        <MinusCircleIcon size={30} color={items?.length ? "#00ccbb" : "gray"} style={{opacity: items?.length ? 1 : .1}}></MinusCircleIcon>
                    </TouchableOpacity>

                    <Text className="p-2 color-blue-400">
                        {items.length}
                    </Text>

                    <TouchableOpacity className="bg-white border-0" onPress={addItemsToBasket}>
                        <PlusCircleIcon size={30} color="#00ccbb"></PlusCircleIcon>
                    </TouchableOpacity>

                </View>
            }
        </>
    )
}

export default DishRow