import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ image, title }) => {
  return (
    <TouchableOpacity className="pr-1">
        <Image source={{uri: image}} className="h-20 w-20 rounded"/>
        <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard